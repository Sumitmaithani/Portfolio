import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';


const Logo = styled.h1`
display: inline-block;
text-align: center;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico', cursive;
color: #fff;
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`


const LogoComponent = () => {
  return (
    <Logo>
        SM
    </Logo>
  )
}

export default LogoComponent