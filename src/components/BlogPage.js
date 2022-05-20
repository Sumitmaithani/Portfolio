import React from 'react'
import styled from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import Socialcons from '../subComponents/SocialIcons';
import {Blogs} from '../data/BlogData'
import BlogComponent from '../components/BlogComponent';

const MainContainer = styled.div`
background-color: #1a1a1a;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100%;
height: auto;
`
const Container = styled.div`
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 10rem;

`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
@media (max-width: 608px) {
display: block;
}
`

const  BlogPage = () => {
  return (
    <MainContainer>
       <Container>
          <LogoComponent />
          <PowerButton />
          <Socialcons />

<Center>
<Grid>
{
  Blogs.map(blog => {
    return <BlogComponent key={blog.id} blog={blog} />
  })
}
</Grid>

</Center>
  
       </Container>
    </MainContainer>
  )
}

export default  BlogPage