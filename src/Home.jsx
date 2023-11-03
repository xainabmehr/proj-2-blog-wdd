import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Row, Col, Card } from 'react-bootstrap'; // Import necessary Bootstrap components
import './App.css';
import ArticleGrid from './grids.jsx';
import Saras from './saras.jsx';
import Yehchans from './yehchans.jsx';
import ImageS from './saras-img.png';
import ImageY from './yeh-img.jpg';
import ImageX from './xainabs.jpeg';

const articles = [
  {
    id: 'Yehchans',
    title: 'Winning in the job Market',
    content: 'May the code be with you...in this economy',
    imageUrl: ImageY,
  },
  {
    id: 'Saras',
    title: 'The Guide to being the Alpha Male',
    content: 'Wondering how you can be the alpha at UC Berkeley? Look no further...',
    imageUrl: ImageS,
  },
  {
    id: 'Xainabs',
    title: '5 mental health tips',
    content: 'Here are some mental health tips that you NEED to survive midterm season at this school... for real...',
    imageUrl: ImageX,
  },
];
function Home() {
  const headingStyle = {
    color: 'rgb(164, 106, 34)',
    marginBottom: '20px',
  };

  return (
    <div className='body'>
      <h1 style={{ ...headingStyle, marginBottom: 0 }}>Welcome to the Berkeley Experience</h1>
      <h4 style={headingStyle}>from the eyes of Xainab, Sara & Yehchan</h4>
      <ArticleGrid articles={articles} />
    </div>
  )
}

export default Home;

