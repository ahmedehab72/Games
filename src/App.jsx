import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Shooter from './components/Shooter/Shooter'
import Mmorpg from './components/Mmorpg/Mmorpg'
import Sailing from './Sailing/Sailing'

import Pixel from './components/Pixel/Pixel'
import Permadeath from './components/Permadeath/Permadeath'
import Superhero from './components/Superhero/Superhero'
import GameDetails from './components/GameDetails/GameDetails'



export default function App() {

  let router = createBrowserRouter([{path:'' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'Shooter' , element:<Shooter/>},
    {path:'Mmorpg' , element:<Mmorpg/>},
    {path:'Sailing' , element:<Sailing/>},
    {path:'Permadeath' ,element:<Permadeath/>},
    {path:'Pixel' , element:<Pixel/>},
    {path:'Superhero' , element:<Superhero/>},
    {path:'game/:id' , element:<GameDetails/>}

    
  ]}])
  return <>
    <RouterProvider router={router} />
  </>
}
