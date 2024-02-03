import React from 'react'
import {Link} from 'react-router-dom'
import { Button,Stack,Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
    console.log("exercise from exerciseCard",exercise);
  return (
    <Link 
      className='exercise-card' 
      to={`/exercise/${exercise.id}`}
    >
      <img 
        src={exercise.gifUrl} 
        alt={exercise.name} 
        loading='lazy' 
      />

      <Stack 
        direction="row" 
        justifyContent="center"
      >
        <Button 
          sx=
            {{
              ml:'21px',
              color:'#fff',
              background:'var(--color3)',
              fontSize:'14px' ,
              borderRadius:'20px',
              textTransform:'capitalize',
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",        
              "&:hover":{
                background:'var(--color3)'
              }
            }}
        >
          {exercise.bodyPart}
        </Button>
        <Button 
          sx=
            {{
              ml:'21px',
              color:'#fff',
              background:'var(--color2)',
              fontSize:'14px' ,
              borderRadius:'20px',
              textTransform:'capitalize',
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              "&:hover":{
                background:'var(--color2)'
              }
            }}
          >
            {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px" 
        color="var(--color2)" 
        textAlign="center" 
        fontWeight="bold" 
        mt="11px" 
        pb="10px" 
        textTransform="capitalize" 
        fontSize="22px"
      >
        {exercise.name}         
      </Typography>
    </Link>
  )
}

export default ExerciseCard