import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, MainLayout } from './components/Layout';
import { NavBar } from './components/NavBar';
import PortfolioTheme from './components/Theme';
import { About } from './components/About';
import { Box } from '@mui/material';
import { AboutMe } from './components/AboutMe';
import { WorkExperience } from './components/WorkExperience';
import { Project } from './components/Project';
import { Education } from './components/Education';
import { Contact } from './components/Contact';


function App() {

  const Divider = () => {
    return (
      <hr
        style={{
            width: '500px',
            borderWidth: '1px'
        }}
      />
    )

  }

  return (
    <PortfolioTheme>
      <NavBar />
      <Box
        display={'flex'}
        flexDirection={'column'}
        sx={{ mb: 5 }}
      >
        <About />
        <AboutMe />
        <Divider />
        <WorkExperience />
        <Divider />
        <Project />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </Box>
    </PortfolioTheme>


  );
}

export default App;
