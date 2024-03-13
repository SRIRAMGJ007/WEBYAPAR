import axios from "react-native-axios";

const ApiManager = axios.create({
    baseURL:`${process.env.API_KEY}`,
    respomseType : 'json',
    withCredentials:true,
})

export default ApiManager;