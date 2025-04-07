import fs from 'fs'
import path from 'path'
import * as jsonc from 'jsonc-parser';
import process from 'process';

// 定义类型
interface Category {
  name: string;
  link: string;
  src: string;
  description?: string;
  icon?: string;
}

interface ToolItem {
  name: string;
  tags?: string[];
  description?: string;
  url?: string;
  icon?: string;
}

interface ChangelogItem {
  version: string;
  date: string;
  changes: string[];
}

// 读取 categories 数据
export function getCategories(locale: string): Category[] {
    const categoriesPath = path.join(process.cwd(), 'data', 'json', locale, 'tools', 'category.jsonc');
    const categories = jsonc.parse(fs.readFileSync(categoriesPath, 'utf8'));
    if (typeof categories === 'string') {
        // 如果解析后仍是字符串，可能需要二次解析
        try {
            return jsonc.parse(categories);
        } catch (error) {
            console.error('二次解析失败:', error);
            return categories as unknown as Category[]; // 如果二次解析失败，返回原始解析结果
        }
    }
    return categories as Category[];
}


// 读取category数据
export function getCategoryByLink(link: string, locale: string): Category | undefined {
    const categoriesPath = path.join(process.cwd(), 'data', 'json', locale, 'tools', 'category.jsonc');
    const categories = jsonc.parse(fs.readFileSync(categoriesPath, 'utf8')) as Category[];
    console.log('categories: ', categories);
    return categories.find(category => category.link === link);
}

// 读取 datalist 数据
export function getDataList(src: string, locale: string): ToolItem[] {
    const dataPath = path.join(process.cwd(), 'data', 'json', locale, 'tools', src);
    const dataList = jsonc.parse(fs.readFileSync(dataPath, 'utf8'));
    if (typeof dataList === 'string') {
        // 如果解析后仍是字符串，可能需要二次解析
        try {
            return jsonc.parse(dataList);
        } catch (error) {
            console.error('二次解析失败:', error);
            return dataList as unknown as ToolItem[]; // 如果二次解析失败，返回原始解析结果
        }
    }

    return dataList as ToolItem[];
}

// 根据关键词搜索数据
export function searchDataByKeyword(keyword: string, locale: string): ToolItem[] | null {
    let result: ToolItem[] = [];
    
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
export function getChangelog(): ChangelogItem[] {
    const dataPath = path.join(process.cwd(), 'data', 'json', 'changelog.jsonc');
    const dataList = jsonc.parse(fs.readFileSync(dataPath, 'utf8')) as ChangelogItem[];
    return dataList;
} 