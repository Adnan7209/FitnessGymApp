import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions,fetchData, youtubeOptions } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [exerciseVideos,setExerciseVideos] = useState([]);
  const [targetMusclesExercises,setTargetMusclesExercises] = useState([]);
  const [equipmentExercises,setEquipmentExercises] = useState([]);

  const {id} = useParams();
  console.log("ExerciseDetail component: id ",id);

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions); 
      setExerciseVideos(exerciseVideosData.contents);

      const targetMusclesExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}?limit=100`,exerciseOptions);
      setTargetMusclesExercises(targetMusclesExercisesData);
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}?limit=100`,exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);


    }
    fetchExercisesData();
    window.scrollTo({top:0, behavior:'smooth'});
  },[id])

  
  return (
    <Box>
      <Detail 
        exerciseDetail={exerciseDetail}
      />
      <ExerciseVideo 
        exerciseVideos={exerciseVideos} 
        name={exerciseDetail.name}
      />      
      <SimilarExercises 
        targetMusclesExercises={targetMusclesExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export default ExerciseDetail