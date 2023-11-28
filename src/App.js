import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyle";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import Proj1 from "./components/Proj1";
import Proj2 from "./components/proj2";
import Proj3 from "./components/Proj3";
import Proj4 from "./components/Proj4";
import Proj5 from "./components/Proj5";
import Proj6 from "./components/Proj6";
import Proj0 from "./components/Proj0";
import Proj7 from "./components/Proj7";
import CraftsPage from "./components/CraftsPage";
import Onboardingwithframer from "./crafts/Onboardingwithframer";
import Duolingoanimations from "./crafts/Duolingoanimations";
import QuizApp from "./crafts/QuizApp";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/work" element={<BlogPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
            <Route exact path="/crafts" element={<CraftsPage />} />
            <Route exact path="/work/0" element={<Proj0 />} />
            <Route exact path="/work/1" element={<Proj6 />} />
            <Route exact path="/work/2" element={<Proj5 />} />
            <Route exact path="/work/3" element={<Proj1 />} />
            <Route exact path="/work/4" element={<Proj3 />} />
            <Route exact path="/work/5" element={<Proj2 />} />
            <Route exact path="/work/6" element={<Proj4 />} />
            <Route exact path="/work/7" element={<Proj7 />} />
            <Route
              exact
              path="/crafts/onboardingwithframer"
              element={<Onboardingwithframer />}
            />
            <Route
              exact
              path="/crafts/duolingoanimations"
              element={<Duolingoanimations />}
            />
            <Route exact path="/crafts/quizapp" element={<QuizApp />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
