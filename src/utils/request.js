import axios from 'axios'



const domain = 'http://localhost:3333';
//对于接口请求前的参数做转换，主要添加统一的 domain
axios.interceptors.request.use((config) =>({
    ...config,
    url:domain + config.url,
}) );

//对返回的结果做拦截，由两部分组成：数据转换 错误的处理
axios.interceptors.response.use((response) => response.data, (err) => Promise.reject(err));


//get 获取服务器资源
export const get = (url) => axios.get(url);

//post 新增一个资源
export const post = (url, params) => axios.post(url,params); 

//put 更新一个资源
export const put = (url, params) => axios.put(url,params); 

//删除一个资源
export const del = (url, params) => axios.del(url,params); 

export const patch = (url, params) => axios.patch(url,params); 