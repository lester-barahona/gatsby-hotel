import React from 'react'
import Header from './header';
import { Helmet } from 'react-helmet';
import Footer from './footer';


const Layout = ({children}) => {
    return (
       <>
            <Helmet>
                <title>Hotelcito</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
            </Helmet>
            <Header/>
            {children}
            <Footer/>
       </>
    )
}

export default Layout
