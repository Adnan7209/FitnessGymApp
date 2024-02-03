import React from 'react'
import {Box, Stack , Typography, Button} from "@mui/material";
import HeroBannerImage from "../assets/images/banner3.jpg"
import { TypeAnimation } from 'react-type-animation';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

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
            position="relative"
            p="20px"
        >
            <Box
                sx=
                {{
                    padding:{lg:"20px 60px"}
                }} 
            >
                <Typography 
                    color="var(--color2)" 
                    fontWeight={600} 
                    sx={{ 
                        fontSize:{xs:"70px",lg:"100px"}
                    }}
                >
                    Fitness Club
                </Typography>
                <Typography 
                    fontWeight={700}
                    color="var(--color1)"
                    sx=
                    {{
                        fontSize:{lg:'64px', xs:'40px'}
                    }} 
                    mb="23px" 
                    mt="30px"
                >
                    <TypeAnimation
                        sequence={seq}  
                        repeat={Infinity}
                    />
                </Typography>
                <Typography 
                    fontSize="20px" 
                    lineHeight="28px" 
                    mb={4} 
                    fontStyle="italic" 
                    color="var(--color1)"
                >
                    <Box 
                        sx=
                        {{
                            width:{lg:'500px',xs:'300px'}
                        }}
                    >
                        Begin an illuminating fitness journey with a compilation of the most potent workouts to cultivate a fitter, stronger version of yourself !!!
                    </Box> 
                </Typography>
                <Button 
                    variant='contained' 
                    endIcon={<ArrowForwardIosOutlinedIcon />}
                    href='#excercises'
                    sx=
                    {{
                        backgroundColor:'var(--color2)',
                        padding:"10px 30px",
                        '&:hover': {
                            backgroundColor: 'var(--color1)'
                        },
                    }}
                >
                    Explore Exercises
                </Button>
            </Box>       
            <Typography 
                fontWeight={800}
                color="var(--color2)"
                sx={{
                    opacity:0.27,
                    display:{md:'block', xs:'none'},
                    position:'absolute',
                    top:{md:'280px',lg:'280px'},
                    left:{md:'280px',lg:'450px'},
                }}
                fontSize={150}
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner