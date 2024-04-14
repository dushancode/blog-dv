
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Missing from './components/Missing';
import Nav from './components/Nav';
import NewPosts from './components/NewPosts';

//import NewPosts from './components/NewPosts';
import { Route, Routes, useHistory } from 'react-router-dom';
import PostPage from './components/PostPage';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  return (
  
  <div className='App'>
  <Header title="React BLOG"/>
  <Nav/>
      <Routes>
     
        <Route exact path="/" component={Home} />
        <Route path='/post' Component={NewPosts}/>
        <Route path='/post/:id' Component={PostPage}/>
        <Route path='/about' Component={About}/>
        <Route path='*' Component={Missing}/>

        </Routes>
    
 
  <Footer/>
  </div>
  
  );
}


export default App;
