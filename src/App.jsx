
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import AnimRoutes from './components/AnimRoutes'
import Header from './components/Header'

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Route index element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/portfolo" element={<Portfolio />} />
  //     </Route>
  //   )
  // )

  return (
    <>
      {/* <h1>app</h1>
      <RouterProvider router={router} >
        <Outlet />
      </RouterProvider> */}
      <Header />
      <AnimRoutes />
    </>
  )
}

export default App
