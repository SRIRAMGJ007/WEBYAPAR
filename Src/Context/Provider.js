import React,{ createContext,useState} from 'react'


export const ImgContext  = createContext();

export const ImgProvider = ({children}) => {
    const [imgdata, setimgdata] = useState([]);
  return (
    <ImgContext.Provider value={{imgdata,setimgdata}}>
        {children}
    </ImgContext.Provider>
  )
}



