import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

import { formatViews } from '../utils/formatViews';

const ExerciseVideo = ({exerciseVideos,name}) => {
     
    console.log("ex video",exerciseVideos);
    console.log("name",name);

    if(!exerciseVideos.length)
    return 'Loading...';
    
   console.log("ehhlloo");


    return (
        <Box sx=
            {{
                marginTop:{lg:'100px',sm:"50px",xs:'20px'}
            }}
            p="20px"
        >
            <Typography 
                variant='h4' 
                mb="33px"
                sx=
                    {{
                        color:"var(--color2)"
                    }}
            >
                Watch <span style={{color:'var(--color2)',fontWeight:"800",textTransform:"capitalize"}}>{name}</span> exercise videos
            </Typography>
            <Stack 
                justifyContent="flex-start" 
                flexWrap="wrap" 
                alignItems="center"
                sx=
                {{
                    flexDirection:{md:'row'},
                    gap:{lg:'110px', xs:'30px'}
                }}
            >
                {
                    exerciseVideos?.slice(0,3).map((item,index)=>(
                        <Box key={index} 
                            className='exercise-video'
                            m="10px" 
                        >
                            <iframe
                                width="360px"
                                height="180px"
                                src={`https://www.youtube.com/embed/${item.video.videoId}`}
                                title={item.video.title}
                                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <Box 
                                sx=
                                {{
                                    color:"var(--color2)"
                                }}
                            >
                                <Typography 
                                    variant='h5'                                
                                >
                                    {item.video.title}
                                </Typography>
                                <Typography 
                                    variant='h6'
                                >
                                    {item.video.channelName}
                                </Typography>
                                <Stack 
                                    direction="row" 
                                    gap={4}
                                >
                                    <Typography>
                                        {formatViews(item.video.viewCountText)}
                                        <span> views</span>
                                    </Typography>
                                    <Typography >
                                        Published <span style={{fontStyle:"italic"}}>{item.video.publishedTimeText} </span>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                    ))
                } 

            </Stack>

        </Box>
    )
}

export default ExerciseVideo