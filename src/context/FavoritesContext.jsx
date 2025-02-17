import { createContext, useState } from "react"

import toast, { Toaster } from 'react-hot-toast';
// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext(null)


// eslint-disable-next-line react/prop-types
const FavoritesProvider = ({children}) => {
    const [favs, setFavs] = useState([])
  
    const toggleFavorites = (product) =>{

        const  idx = favs.findIndex((q) => q.id === product.id)
         
      if(idx === -1) {
        setFavs([...favs, product]);
        toast.success(" added to your favorites!");
      } else{
        setFavs(favs.filter((q) => q.id !== product.id))
      }
    }

    const clearAllFavs = () => {
    setFavs([])
    }
  return (
    <FavoritesContext.Provider value={{favs, toggleFavorites, clearAllFavs}}>
        {children}
        <Toaster /> 
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider