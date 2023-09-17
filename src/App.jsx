
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


  return (
    <>
      <Header />
      <AnimRoutes />
    </>
  )
}

export default App
