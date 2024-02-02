import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from "../assets/images/logo2.png"
import { LineAxis } from '@mui/icons-material';

const Navbar = () => {

  const location = useLocation();
  const [currentPath,setCurrentPath] = useState('');
  useEffect(()=>{
    setCurrentPath(location.pathname);
    console.log("from Navbar: Currentpath -> ",location.pathname);
  },[location.pathname]);
  

  return (
  <Stack
    display="flex"
    justifyContent="space-around"
    alignItems='center' 
    sx={{
      gap:{sm:'122px', xs:'40px'},
      flexDirection:{sm:"row",xs:"col"},
      mt:{sm:'0', xs:'20px'},
   justifyContent:'none',
   }} px="20px">
    <Link to="/">
      <img src={Logo} alt='logo' style={{width:'200px' ,height:'200px' , margin: '0 20px',borderRadius:"110px"}}/>
    </Link>
    <Stack 
      display="flex"
      gap="40px"
      fontSize="35px"
      alignItems="flex-end"
      justifyContent="space-evenly"
      sx={{flexDirection:{sm:"row",xs:"row"}}}
      >
      <Link to="/" style={{textDecoration:'none', color:'var(--color1)', 
      borderBottom: currentPath === '/' ? '3px solid var(--color1)' : 'none'
      
      }}>Home</Link>
      {
        currentPath === '/' ? (
          <a href="#exercises" style={{textDecoration:'none', color:'var(--color1)'}}>Exercises</a>
        ):(
          <a href="#instructions" style={{textDecoration:'none', color:'var(--color1)'}}>Instructions</a>
        )
      }
    </Stack>
    

  </Stack>
    )
}

export default Navbar