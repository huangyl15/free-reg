export const phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
export const chineseName = /^([\u4e00-\u9fa5]|[A-Za-z]|\u2022|\.){1,}$/;
export const chineseIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
export const HKMoIdCard = /(^[hm]\d{8,10}$)/i;
export const TWIdCard = /^\d{8,10}$/;
export const HMTliveIdCard = /^8[1-3]\d{15}[x\d]$/i;
export const publicResource = /^-\d{9}=/;
