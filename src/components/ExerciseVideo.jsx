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
    <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p="20px">
        <Typography variant='h4' mb="33px">
            Watch <span style={{color:'var(--color1)',textTransform:"capitalize"}}>{name}</span> exercise videos
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
            sx={{flexDirection:{lg:'row'},
                gap:{lg:'110px', xs:'0'}}}>
                    {
                        exerciseVideos?.slice(0,3).map((item,index)=>(
                            <div key={index} className='exercise-video'>
                                <iframe
                                    width="360px"
                                    height="202px"
                                    src={`https://www.youtube.com/embed/${item.video.videoId}`}
                                    title={item.video.title}
                                    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                                <Box>
                                    <Typography variant='h5' color='#000'>
                                        {item.video.title}
                                    </Typography>
                                    <Typography variant='h6' color='#000'>
                                        {item.video.channelName}
                                    </Typography>
                                    <Stack direction="row" gap={4}>
                                    <Typography>
                                        {formatViews(item.video.viewCountText)}
                                        <span> views</span>
                                    </Typography>
                                    <Typography>
                                        <span>Published </span>{item.video.publishedTimeText}
                                    </Typography>
                                    </Stack>
                                </Box>
                            </div>
                        ))
                    } 

        </Stack>

    </Box>
    )
}

export default ExerciseVideo