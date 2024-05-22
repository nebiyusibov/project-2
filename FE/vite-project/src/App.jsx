import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ROUTERS/router'
import MainProvaider from './context/MainProvaider'
import WishListMainProvaider from './context/WishListMainProvaider'

function App() {

  return (
    <>
      <MainProvaider>
        <WishListMainProvaider>
          <RouterProvider router={router}></RouterProvider>
        </WishListMainProvaider>
      </MainProvaider>
    </>
  )
}

export default App
