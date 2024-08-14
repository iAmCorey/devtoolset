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
