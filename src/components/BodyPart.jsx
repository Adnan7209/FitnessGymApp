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
        sx=
            {{
                borderTop: bodyPart === item ? '6px solid var(--color2)' :'',
                borderBottom: bodyPart === item ? '6px solid var(--color2)' :'',
                borderRadius:"60px",
                boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px,rgb(38, 57, 77) 0px 20px 30px -10px",
                width:'270px',
                height:'280px',
                gap:'47px',
                cursor:'pointer',
                px:"20px"
                
            }}
        onClick={()=>{
            setBodyPart(item);
            window.scrollTo({top:1800, left:100,behavior:'smooth'})  }}
        >
        <img src={Icon} alt='dumbell' 
            style={{
                width:'100px' ,
                height:'100px'
            }}
        />
        
        <Typography 
            fontSize="24px"
            fontWeight="bold" 
            color="var(--color2)" 
            textTransform="capitalize"
            >
                {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart