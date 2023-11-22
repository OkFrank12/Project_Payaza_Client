
import Header from '../static/Header'
import ProductsPage from '../../pages/ProductsPage'
import { Outlet } from 'react-router-dom'
import Footer from '../static/Footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <ProductsPage/>
        <Outlet/>
    </div>
  )
}

export default Layout