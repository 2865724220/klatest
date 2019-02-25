import axios from 'axios'

const $axios = axios.create({
    baseURL:'https://test-paladin.pingan.com.cn:10094/app/',
    timeout:10000,
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
    withCredentials:true,
    method:'POST',
    // params:{
    //     orgId:'310001',
    //     reqChl:'03',
    //     reqTime:'20190116165741169',
    //     serNum:'1234567890',
    //     sign:'SHA256withRSA2048',
    //     token:'D688D2555ED94C7285D26BDF4B13D08F',
    //     version:'100',
    // }
})

$axios.interceptors.response.use(response =>{
    return response.data
},error => {
    return Promise.reject(error)
    }
)

export default $axios


