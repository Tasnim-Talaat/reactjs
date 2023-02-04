import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import App from './App';
// import Button from './Component/Button';
// import Card from './Component/Card';
import Banner from './Pages/Banner';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Footer from './Pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Button name='sam' color='btn btn-danger'/>
    <Progress stylee='25%' aria='25'  />
  <Card name='tasnim' /> */}
    <Banner />
    <About />
    <Skills />
    <Portfolio />
    <Footer />
  </React.StrictMode>
);


