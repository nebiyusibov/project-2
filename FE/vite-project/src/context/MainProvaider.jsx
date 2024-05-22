import React, { createContext, useState } from 'react'

export const MainContext=createContext()

function MainProvaider({children}) {
    const [basket,setbasket]=useState([])

    function addBasket(item) {
        const index=basket.findIndex((x)=>x._id === item._id)
        if (index !== -1) {
            basket[index].count++
            setbasket([...basket])
        }
        else{
            setbasket([...basket,{...item,count:1}])
        }
    }
    function decBasket(item) {
        const index=basket.findIndex((x)=>x._id === item._id)
        if (basket[index]>1) {
            basket[index].count--
            setbasket([...basket])
        }
    }
    function removeBasket(item) {
        setbasket(basket.filter((x)=>(x._id !== item._id)))
    }

  return (
    <MainContext.Provider value={{basket,decBasket,removeBasket}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainProvaider