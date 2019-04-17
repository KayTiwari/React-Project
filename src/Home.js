import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import './App.css'
import logo from './logo.svg'

const Home = () => {
    return (
        <div className='landing'>
            <Header />
            <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
          <a href='https://github.com/KayTiwari'><i class="fab fa-github fa-2x"></i></a>
          </div>
            <Link to='./Main' className='link'>Enter Main Site</Link>
        </div>
    )
}
export default Home;