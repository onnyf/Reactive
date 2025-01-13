import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (

    <nav>
        <div>
            <img src="./images/logo.png" alt="" />
        </div>
        <div>
            <ul>
                <li>
                    <a href="www.ggogle.com">Home</a>
                </li>
                <li>
                    <a href="hkjj">About us</a>
                </li>
                <li>
                    <a href="mhdgd">Products</a>
                </li>
                <li>
                    <a href="hhh">Contact us</a>
                </li>
            </ul>
        </div>
        <div>
            <button>Register</button>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar