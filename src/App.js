import './App.css';
import { Header } from '../src/common/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './common/home/Home';
import { About } from "./components/about/About";
import { Team } from './components/team/Team';
import { Price } from './components/Pricing/Price';
import { CoursesHome } from './components/allcourses/CourseHome';
import { Blog } from './components/blog/Blog';
import {Contact} from './components/contact/Contact'
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/courses" exact element={<CoursesHome />} />
          <Route path="/team" exact element={<Team/>}/>
          <Route path="/pricing" exact element={<Price/>}/>
          <Route path="/blog" exact element={<Blog/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
