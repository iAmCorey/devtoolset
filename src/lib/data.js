import fs from 'fs'
import path from 'path'
import * as jsonc from 'jsonc-parser';

// 读取 categories 数据
export function getCategories() {
    const categoriesPath = path.join(process.cwd(), 'data', 'json', 'tools', 'category.jsonc');
    const categories = jsonc.parse(fs.readFileSync(categoriesPath, 'utf8'));
    return categories;
}


// 读取category数据
export function getCategoryByLink(link) {
    const categoriesPath = path.join(process.cwd(), 'data', 'json', 'tools', 'category.jsonc');
    const categories = jsonc.parse(fs.readFileSync(categoriesPath, 'utf8'));
    return categories.find(category => category.link === link);

}

// 读取 datalist 数据
export function getDataList(src) {
    const dataPath = path.join(process.cwd(), 'data', 'json', 'tools', src);
    const dataList = jsonc.parse(fs.readFileSync(dataPath, 'utf8'));
    return dataList;
}

// 根据关键词搜索数据
export function searchDataByKeyword(keyword) {
    let result = []
    
    const categories = getCategories();

    
    if (!categories || categories.length === 0) return null;

    
    for (const category of categories) {
        if (category.name.toLowerCase() == keyword.toLowerCase()) {
             const dataList = getDataList(category.src)
             result = result.concat(dataList);
        } else {
            const dataList = getDataList(category.src)
        
            for (const item of dataList) {
                if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
                    // search by name
                    result.push(item)
                } else if (item.tags && item.tags.some(tag => tag.toLowerCase() == keyword.toLowerCase())) {
                    // search by tags
                    // console.log('item hit: ', item)
                    result.push(item)
                }
            }
        }
        
        // console.log('result: ', result)
    }

    return result;
}

// 读取更新日志
export function getUpdateLogs() {
    const dataPath = path.join(process.cwd(), 'data', 'json', 'updatelog.jsonc');
    const dataList = jsonc.parse(fs.readFileSync(dataPath, 'utf8'));
    return dataList;
}
