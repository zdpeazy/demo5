import $axios from "./axios";

/**
 * 测试接口-mock数据-获取模板展示信息
 * @param {*} params 
 * @returns 
 */
export const mGetTplInfo = (params = {}) => {
    return $axios({
        url: 'template/info/get',
        isFilter: false,
        method: 'get',
        params
    });
};
