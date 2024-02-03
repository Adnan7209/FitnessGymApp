import React from 'react'
import Icon from "../assets/icons/gym1.png"
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
            borderTop: bodyPart === item ? '6px solid var(--color2)' :'',
            borderBottom: bodyPart === item ? '6px solid var(--color2)' :'',
            borderRadius:"10px",
            // backgroundColor:"var(--color4)",
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            gap:'47px',
            cursor:'pointer',
            // m:"50px"
            px:"20px"
            
        }
    }
        onClick={()=>{
            setBodyPart(item);
            window.scrollTo({top:1800, left:100,behavior:'smooth'})  }}
        >

        <img src={Icon} alt='dumbell' style={{width:'100px' , height:'100px'}}/>
        <Typography fontSize="24px" fontWeight="bold" color="var(--color2)" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart