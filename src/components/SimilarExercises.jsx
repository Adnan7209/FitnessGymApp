import { Box,Typography,Stack } from '@mui/material';
import React from 'react'

import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({targetMusclesExercises,equipmentExercises}) => {
    console.log("trget ",targetMusclesExercises);    
    console.log("equip ",equipmentExercises);

  return (
    <Box sx={{mt:{lg:'100px',xs:'5px'}}}>
        <Typography variant='h3' mb={7}>Exercises that target the same muscle group</Typography>
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {targetMusclesExercises.length ?(
                <HorizontalScrollBar data={targetMusclesExercises} />
            ):(
                <Loader/>
            )}

        </Stack>
        <Typography variant='h3' mb={7} mt={15}>Exercises that use the same equipment</Typography >
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {equipmentExercises.length ?(
                <HorizontalScrollBar data={equipmentExercises} />
            ):(
                <Loader/>
            )}

        </Stack>
    </Box>
  )
}

export default SimilarExercises