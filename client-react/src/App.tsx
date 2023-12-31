import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


import { Login } from 'components/Login'
import { Root } from 'components/Root'
import { Home } from 'pages/Home'
import { Error } from 'pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<Error/>}>
      <Route index element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
