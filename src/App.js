import React from 'react';
// import Home from './components/home';
import Blog from './components/BlogComment';
import BookList from './components/ReactLearn';
// import './app.css';

const App = () => {
  return (
    <div className='App'>
      {/* <Home /> */}
      
      <BookList />
      <Blog />
    </div>
  )
}

export default App;