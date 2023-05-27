import pinyin from 'pinyin';
import { types } from './config';

const getAllPinyinStr = str => {
    let result = pinyin(str, {
        style: 'normal',
    }).join('');
    result += ` ${str}`;
    result += ` ${pinyin(str, {
        style: 'first_letter',
    }).join('')}`;
    return result;
}

const isTotalEnhance = (info) => {
    let result = 0;
    info.forEach(({ type, value, enhance }) => {
        if (type === 'qt') {
            result += enhance ? 1 : -1;
        } else {
            result += types[type].enhance(value) ? 1 : -1
        }
    });
    return result;
}

export default config => {
    return config.map(item => {
        item.searchKey = getAllPinyinStr(item.name.replace('-', ''));
        item.alias.forEach(str => {
           item.searchKey += ` ${getAllPinyinStr(str)}`
        });
        item.status = isTotalEnhance(item.info);
        return item;
    });
}