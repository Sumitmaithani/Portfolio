import React from 'react';
import styled from 'styled-components';
import PowerBtn from '../../src/assets/svg/power.svg';
import { Link } from 'react-router-dom';

const Power = styled.div`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 1.9rem;
height: 1.9rem;

display: flex;
justify-content: center;
align-content: center;
z-index: 3;

cursor: pointer;

&:hover{
    background-color: rgba(0, 255, 0, .4);
    box-shadow: 0 0 8px 6px rbga(0, 255, 0, .2);
}
&>*:first-child{
    text-decoration: none;
    color: inherit;
}
` 

const Img = styled.img`
  width: 30px;
`


const PowerButton = () => {
  return (
    <Power>
    <Link to="/" >
    <Img src={PowerBtn} alt='' />   
    </Link>
    </Power>
  )
}

export default PowerButton