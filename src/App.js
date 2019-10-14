import React from 'react';
import Header from './components/header';
import './App.scss';
import HeadLine from './components/headline';

const tempArr = [{
  fName: 'John',
  lName: 'Doe',
  email: 'john@gmail.com',
  age: 24,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <HeadLine header='Posts' tempArr={tempArr} desc='click the render button for posts' />
      </section>
    </div>
  );
}

export default App;
