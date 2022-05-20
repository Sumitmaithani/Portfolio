import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled(NavLink)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;

color: ${props => props.theme.text};
border: 2px solid white;
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;
background-color: #fff;
display: flex;
flex-direction: column;
z-index: 5;
@media (max-width: 608px) {
width: calc(10rem + 30vw);
margin-bottom: 30px;
}

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;

${Box}:hover &{
    border: 1px solid ${props => props.theme.body};
}
`
const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};

${Box}:hover &{
    border-bottom: 1px solid ${props => props.theme.body};
}
`

const HashTags = styled.div`
padding: 0.5rem 0;
`

const Tag = styled.span`
padding-right: 0.5rem;
`
const Date = styled.span`
padding: 0.5rem 0;
`


const BlogComponent = (props) => {
    const {name, tags, date, imgSrc, id} = props.blog;
  return (
    <Box to={`/work/${id}`} >
    <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
            {
                tags.map((t,id) => {
                    return <Tag key={id}>#{t}</Tag>
                })
            }
        </HashTags>
        <Date>
            {date}
        </Date>
    </Box>
  )
}

export default BlogComponent