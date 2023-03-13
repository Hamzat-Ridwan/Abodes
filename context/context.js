import { createContext, useState, useEffect } from "react";

export const ScreenMode = createContext(null);

const getInitial = ()=>{
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const dark = localStorage.getItem("dark")
    return dark ? JSON.parse(dark) : true;
  }
  
}

function Context({ children }) {
    const [dark, setDark] = useState(getInitial);

    useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(dark));
    }, [dark]);
  
    return (
      <ScreenMode.Provider value={{ dark, setDark }}>
        {children}
      </ScreenMode.Provider>
    )
  }

export default Context