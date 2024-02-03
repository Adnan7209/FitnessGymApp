import React from 'react'
import {Box, Stack , Typography, Button} from "@mui/material";
import HeroBannerImage from "../assets/images/banner3.jpg"
import { TypeAnimation } from 'react-type-animation';

const HeroBanner = () => {
    const seq = [
        'Sweat,',
        500,
        'Sweat, Smile', //  Continuing previous Text
        500,
        'Sweat, Smile and',
        500,
        'Sweat, Smile and Repeat',
        300,
        'Sweat, Smile and',
        300,
        'Sweat, Smile',
        300,
        'Sweat',
        300,
        ''
    ];
  return (
    <Box 
         
        sx={{
            // backgroundColor:"var(--color1)",
            // mt:{lg:'212px' , xs:'70px'},
            // ml:{sm:'50px'}
        }} position="relative"
         p="20px"
         >
        <Typography color="var(--color1)" fontWeight={600} fontSize="70px"
                    sx={{ 
                        textShadow: '10px 10px 20px rgba(0, 0, 0, 1)',
                    }}
                    >
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
            color="var(--color2)"
            sx={{fontSize:{lg:'44px', xs:'40px'}}} mb="23px" mt="30px">
                <TypeAnimation
                sequence={seq}  
                repeat={Infinity}
                />
            {/* Sweat, Smile <br/> and Repeat */}
        </Typography>
        <Typography fontSize="20px" lineHeight="28px" mb={4} fontStyle="italic" color="var(--color1)">
        <Box sx={{width:{lg:'500px',xs:'300px'}}}>
                Begin an illuminating fitness journey with a compilation of the most potent workouts to cultivate a fitter, stronger version of yourself !!!
            </Box> 
            {/* Check out the most effective exercises */}
        </Typography>
        <Button variant='contained' 
        // color='error' 
        href='#excercises'
                sx={{backgroundColor:'var(--color2)',
                    '&:hover': {backgroundColor: 'var(--color2)'},
                    }}>
                        Explore Exercises
        </Button>
        <Typography fontWeight={800}
                    color="var(--color2)"
                    sx={{
                        opacity:0.27,
                        display:{md:'block', xs:'none'},
                        position:'absolute',
                        top:{md:'280px',lg:'280px'},
                        left:{md:'280px',lg:'450px'},
                        // right:'100px',
                        // zIndex:1,
                        // backgroundColor: 'var(--color3)'


                        
                    }}
                    fontSize={150}
                    // mt={2} 
                     >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img glass'
         />
    </Box>
  )
}

export default HeroBanner