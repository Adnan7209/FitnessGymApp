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

  useEffect(()=>{
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if(bodyPart === 'all')
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
      else
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);

      setExercises(exercisesData);
      console.log("exercisees from bodypart",exercises);
    }
    fetchExercisesData();
  },[bodyPart]);
  return (
    <Box id="exercises"
      sx={{mt:{xs:'50px',sm:"80px",md:"100px"},
      mx:"20px"
    }}
      // mt='180px'
      // p='20px'
      >
      <Typography variant='h3' mb={5}
      sx={{
        color:"var(--color2)",
        fontSize:"50px"
      }}
      >
        Showing Results...
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px',md:"80px"},mt:"50px"}}
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
              sx={{
                // color:'var(--color2)'
                // '&.MuiPaginationItem-colorPrimary':{color:"var(--color2)"}
                '& .MuiPaginationItem-root': {
                  color: 'var(--color2)', // Change the color of the PaginationItem text
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  backgroundColor: 'var(--color2)', // Change the background color of the selected PaginationItem
                  color: 'var(--color4)', // Change the text color of the selected PaginationItem
                  // border:"1px solid var(--color2)",
                  borderRadius:"20px"
                },
              }}
              // variant='outlined'
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