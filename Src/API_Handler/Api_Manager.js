import axios from "react-native-axios";

const ApiManager = axios.create({
    baseURL:'https://test.webyaparsolutions.com/',
    respomseType : 'json',
    withCredentials:true,
})

export default ApiManager;