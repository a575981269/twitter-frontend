import{get, post} from '../utils/request';
//mock/routes.jason 中存放的是映射关系
//只有一个export时 必须定义为defualt
export const loginService = (username, password) => 
{
    return get(`/api/login/${encodeURIComponent(username)}/${encodeURIComponent(password)}`
);
console.log("Attempting to fetch:", `http://localhost:3333/user/${encodeURIComponent(username)}/${encodeURIComponent(password)}`);
}


export const register = (username, password) => post(`/register/${username}/${password}`);