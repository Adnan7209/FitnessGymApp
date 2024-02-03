import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Logo from "../assets/images/footerLogo.png"

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';


const Footer = () => {
  const handleInstagramClick = () => {
    const instagramUrl = 'https://www.instagram.com/_ad_.nan_';
    window.open(instagramUrl, '_blank');
  };

  const handleLinkedInClick = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/mohammed-adnan-491084219';
    window.open(linkedinUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '123'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMailClick = () => {
    const mailtoUrl = 'mailto:mdadnan28713@gmail.com';
    window.open(mailtoUrl, '_blank');
  };
  return (
    <Box    
      height="80px"
      mt="80px" 
      bgcolor="var(--footerColor)"
      sx=
      {{
        color:"var(--color4)",
        width:"100vw",  
      }}
    > 
      <Stack 
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <img 
          src={Logo} 
          alt='logo' 
          width="80px"
          heigth="50px"
          style={{margin:"15px 0"}}
        />
        <Stack alignItems="center" >
          <Typography style={{ color: 'var(--color5)' }}>
            Copyright © 2024<br/>
            All rights reserved.           
          </Typography>
        </Stack>
        <Stack direction="row" gap="10px">
          <Tooltip title="Instagram">
            <InstagramIcon onClick={handleInstagramClick} style={{ color: 'red' }} />
          </Tooltip>
          <Tooltip title="LinkedIn">
            <LinkedInIcon onClick={handleLinkedInClick} style={{ color: 'blue' }} />
          </Tooltip>
          <Tooltip title="WhatsApp">
            <WhatsAppIcon onClick={handleWhatsAppClick} style={{ color: 'green' }} />
          </Tooltip>
          <Tooltip title="Mail">
            <MailIcon onClick={handleMailClick} style={{ color: 'orange' }} />
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  )
} 

export default Footer