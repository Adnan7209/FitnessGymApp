import React,{useState} from 'react';
import { Box } from '@mui/material';
import { Search } from '@mui/icons-material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  
  const [bodyPart,setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);
  return (
    <Box sx={{
      // backgroundColor:"var(--color2)"
      }}>
      <HeroBanner/>
      <SearchExercises 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}/>
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}/>
    </Box>
  )
}

export default Home