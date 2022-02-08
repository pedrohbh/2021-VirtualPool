import React, { createContext, useState } from 'react'
export const glo = createContext()
const gloProvider = (props) => {
    const [selected, setVariableOne] = useState(0);
    return (
         <glo.Provider 
            value={{
                selected
             }}>
               {props.children}
         </glo.Provider>
    )
}
export default gloProvider