import React from 'react'
import Icon from "../assets/icons/gym.png"
import { Stack,Typography } from '@mui/material'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
    // console.log("item"+item);
    // console.log("bodypart"+BodyPart);
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' :'',
            backgroundColor:"#fff",
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            gap:'47px',
            cursor:'pointer',
            
        }
    }
        onClick={()=>{
            setBodyPart(item);
            window.scrollTo({top:1800, left:100,behavior:'smooth'})  }}
        >

        <img src={Icon} alt='dumbell' style={{width:'40px' , height:'40px'}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart