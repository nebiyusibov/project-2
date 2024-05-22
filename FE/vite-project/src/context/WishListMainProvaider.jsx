import React, { createContext, useState } from 'react'

export const MainContext=createContext()

function WishListMainProvaider({children}) {
    const [wishlist,setwishlist]=useState([])

    function addwishlist(item) {
        const index=wishlist.findIndex((x)=>x._id === item._id)
        if (index !== -1) {
            return  setwishlist(wishlist.filter((x)=>(x._id !== item._id)))
        }
        else{
            setwishlist([...wishlist,item])
        }
    }

    function isExist(item) {
        return wishlist.find((x)=> x._id === item._id)
    }

  return (
    <MainContext.Provider value={{wishlist,addwishlist,isExist}}>
        {children}
    </MainContext.Provider>
  )
}

export default WishListMainProvaider