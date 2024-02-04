import React,{useEffect,useState} from 'react'
import {Box,Button, Stack , TextField, Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
import SearchIcon from '@mui/icons-material/Search';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search,setSearch] = useState('');
    const [bodyParts,setBodyParts] = useState();

    useEffect(()=>{
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

            setBodyParts(['all',...bodyPartsData]);
        }
        fetchExercisesData();
    },[])


    const handleSearch = async () => {
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);          
            
            const searchedExercises = exercisesData.filter(                
                (exercise)=>exercise.name.toLowerCase().includes(search) || 
                exercise.target.toLowerCase().includes(search) || 
                exercise.equipment.toLowerCase().includes(search) || 
                exercise.bodyPart.toLowerCase().includes(search) 
            );

            setSearch('');
            console.log("Data",exercisesData);
            console.log("searched exercises",searchedExercises);
            setExercises(searchedExercises);
            document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' })
            // onClick={() => document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' })}
        }
    }
  return (
    <Stack 
        alignItems="center" 
        sx=
        {{ 
            mt:{xs:'50px',sm:"100px",md:'150px',lg:'200px'}
        }}   
        justifyContent="center"
    >
        <Typography 
            id="searchExercises"
            fontWeight={700} 
            sx={{
                fontSize:{lg:'44px',xs:'30px'},
                color:'var(--color2)'
            }}
            mb="20px" 
            textAlign="center"
        >
            Awesome Exercises You Should Know
        </Typography>
        <Box 
            position="relative" 
            mb="72px">
                <TextField
                    sx=
                    {{
                        input:{fontWeight:'400',color:'var(--color3)'},
                        width:{md:'800px',sm:'600px' ,xs:'350px'},
                        borderRadius: "40px",
                        border: '2px solid var(--color2)',
                        overflow:"hidden",
                        
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'transparent',                           
                        },

                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'transparent', 
                        },                        
                    }}
                    height="76px"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises...'
                    type='text'
                />
            <Button 
                className='search-btn'
                endIcon={<SearchIcon/>}
                sx={{
                        color:"var(--color3)",
                        textTransform:"none",
                        width:{md:"140px",sm:'120px', xs:"100px"},
                        fontSize:{lg:'20px', md:'17px', xs:'14px'},
                        height:'56px',
                        position:"absolute",
                        right:"0",
                        "&:hover":{
                            transform: 'scale(1.1)',
                            backgroundColor:'transparent',
                            transition:'all 400ms'
                        }
                    }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box 
            sx=
            {{
                position:'relative',
                width:'100%',
                ml:{xs:"120px",sm:"150px",md:"50px",lg:"50px"},
            }
        }>
            <HorizontalScrollBar 
                data={bodyParts}  
                bodyPart={bodyPart} 
                setBodyPart={setBodyPart} 
                isBodyParts
            />
        </Box>
    </Stack>
)
}

export default SearchExercises