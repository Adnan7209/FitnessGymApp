import React from 'react'
import { Typography,Stack,Button } from '@mui/material'

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png"

const Detail = ({exerciseDetail}) => {
    console.log("exerciseDetail component: ",exerciseDetail);
    const {bodyPart,equipment,gifUrl,instructions,name,secondaryMuscles,target} = exerciseDetail;
    // console.table(bodyPart,equipment,gifUrl,instructions,name,secondaryMuscles,target);

    const extraDetail = [
        {
            icon:BodyPartImage,
            name:bodyPart,
        },
        {
            icon:TargetImage,
            name:target,
        },
        {
            icon:EquipmentImage,
            name:equipment,
        }
    ]

  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'col'},p:'20px',alignItems:'center'}}>
        <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
            <Typography variant='h3'textTransform="capitalize">
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong {name} is one of the best exercises to targte your {target}. It will help you to improve your mood and gain energy.
            </Typography>
            {
                extraDetail.map((item)=> (
                    <Stack key={item.index} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={item.icon} />
                        </Button>
                        <Typography  textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))
            }
            
        </Stack>
        
    </Stack>
    <Typography variant='h3'textTransform="capitalize" alignSelf='self-start' >
            Instructions...
            
    </Typography>
    <Stack mt="5px" gap={1.3} alignSelf='self-start' >
                {
                    instructions?.map((instruction)=>(
                        <Typography key={instruction.index} variant='h6' >
                            {instruction}
                        </Typography>
                    ))
                }
    </Stack>    

    </Stack>
    
  )
}

export default Detail