import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">
                Movie App
            </Link>

            <Link to="/add"><Button2>Add Movie</Button2></Link>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    height: 60px;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    position: sticky;
    top: 0;
    z-index: 100;
    a {
        text-decoration: none;
        color: #333;
        font-size: 20px;
    }
`

const Button2 = styled.button`
    background: #fff;
    border-color: lightgray;
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 100px;
    cursor: pointer;
`

export default Navbar
