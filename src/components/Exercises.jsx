import React,{useEffect,useState} from 'react';
import { Pagination } from '@mui/material';
import {Box,Stack,Typography} from '@mui/material';


import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({setExercises,bodyPart,exercises}) => {
  const [currentPage,setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExerscise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExerscise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExerscise);

  const paginate = (e,value) => {
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:'smooth'})


  } 
  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'>
      <Typography variant='h3'>
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
        {
          currentExercises  .map((exercise,index)=> (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
        {
          exercises.length > 9 && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large">

            </Pagination>
          )
        }
        
      </Stack>
      
    </Box>
  )
}

export default Exercises