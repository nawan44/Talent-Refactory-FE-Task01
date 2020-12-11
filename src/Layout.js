import React from 'react';
import logo from './logo.svg';
import Header from './component/Header.js';
import Main from './component/Main.js'
import Footer from './component/Footer.js';

function Layout(props){
return (
    <div className="App">
        <Header/>
        <Main>{props.children}</Main>
        <Footer/>
    </div>
)

}
export default Layout
