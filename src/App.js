import React from 'react';
import Header from './components/header';
import './App.scss';
import HeadLine from './components/headline';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <HeadLine header='Posts' desc='click the render button for posts' />
      </section>
    </div>
  );
}

export default App;
