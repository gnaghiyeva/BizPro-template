import React, { createContext, useState } from 'react'
const ModelContext = createContext();

export const ModelContextProvider = ({children}) => {
    const [models,setModels] = useState([])
  return (
    <ModelContext.Provider value={[models,setModels]}>
        {children}
    </ModelContext.Provider>
  )
}

export const useModelContext = () =>createContext(ModelContext)