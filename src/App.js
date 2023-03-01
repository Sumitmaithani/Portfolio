import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyle";

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import MySkillsPage from './components/MySkillsPage';
import Proj1 from './components/Proj1';
import Proj2 from './components/proj2';
import Proj3 from "./components/Proj3";
import Proj4 from "./components/Proj4";
import Proj5 from "./components/Proj5";
import Proj6 from "./components/Proj6";



function App() {
  return <>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Main  />} />
      <Route exact path="/about" element={ <AboutPage /> } />
      <Route exact path="/work" element={ <BlogPage /> } />
      <Route exact path="/skills" element={ <MySkillsPage /> } />
      <Route exact path="/work/1" element={ <Proj5 /> } />
      <Route exact path="/work/2" element={ <Proj6 /> } />
      <Route exact path="/work/3" element={ <Proj1 /> } />
      <Route exact path="/work/4" element={ <Proj3 /> } />
      <Route exact path="/work/5" element={ <Proj2 /> } />
      <Route exact path="/work/6" element={ <Proj4 /> } />
      </Routes>
  </BrowserRouter>

    </ThemeProvider>
    
  </>
    
}

export default App

