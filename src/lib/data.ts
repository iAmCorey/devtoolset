import fs from 'fs'
import path from 'path'
import * as jsonc from 'jsonc-parser';
import process from 'process';
import { type CategoryProps, type ToolProps, type Changelog } from '@/lib/type';


// 读取 categories 数据
export function getCategories(locale: string): CategoryProps[] {
    const categoriesPath = path.join(process.cwd(), 'data', 'json', locale, 'tools', 'category.jsonc');
    const categories = jsonc.parse(fs.readFileSync(categoriesPath, 'utf8'));
    if (typeof categories === 'string') {
        // 如果解析后仍是字符串，可能需要二次解析
        try {
            return jsonc.parse(categories);
        } catch (error) {
            console.error('二次解析失败:', error);
            return categories as unknown as CategoryProps[]; // 如果二次解析失败，返回原始解析结果
        }
    }
    return categories as CategoryProps[];
}


// 读取category数据
export function getCategoryByLink(link: string, locale: string): CategoryProps | undefined {
    const categoriesPath = path.join(process.cwd(), 'data', 'json', locale, 'tools', 'category.jsonc');
    const categories = jsonc.parse(fs.readFileSync(categoriesPath, 'utf8')) as CategoryProps[];
    console.log('categories: ', categories);
    return categories.find(category => category.link === link);
}

// 读取 datalist 数据
export function getDataList(src: string, locale: string): ToolProps[] {
    const dataPath = path.join(process.cwd(), 'data', 'json', locale, 'tools', src);
    const dataList = jsonc.parse(fs.readFileSync(dataPath, 'utf8'));
    if (typeof dataList === 'string') {
        // 如果解析后仍是字符串，可能需要二次解析
        try {
            return jsonc.parse(dataList);
        } catch (error) {
            console.error('二次解析失败:', error);
            return dataList as unknown as ToolProps[]; // 如果二次解析失败，返回原始解析结果
        }
    }

    return dataList as ToolProps[];
}

// 根据关键词搜索数据
export function searchDataByKeyword(keyword: string, locale: string): ToolProps[] | null {
    let result: ToolProps[] = [];
    
    const categories = getCategories(locale);
    
    if (!categories || categories.length === 0) return null;
    
    for (const category of categories) {
        if (category.name.toLowerCase() === keyword.toLowerCase()) {
             const dataList = getDataList(category.src, locale);
             result = result.concat(dataList);
        } else {
            const dataList = getDataList(category.src, locale);
        
            for (const item of dataList) {
                if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
                    // search by name
                    result.push(item);
                } else if (item.tags && item.tags.some(tag => tag.toLowerCase() === keyword.toLowerCase())) {
                    // search by tags
                    // console.log('item hit: ', item)
                    result.push(item);
                }
            }
        }
        
        // console.log('result: ', result)
    }

    return result;
}

// 读取更新日志
export function getChangelog(): Changelog {
    const dataPath = path.join(process.cwd(), 'data', 'json', 'changelog.jsonc');
    const dataList = jsonc.parse(fs.readFileSync(dataPath, 'utf8')) as Changelog;
    return dataList;
} 