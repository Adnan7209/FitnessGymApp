import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';


import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <IconButton onClick={() => scrollPrev()} className="right-arrow">
        <ArrowBackIosIcon
            sx={{fontSize:"30px",
                  color:"var(--color2)",
                  my:"10px"       
          }}
          />
        {/* <img src={LeftArrowIcon} alt="right-arrow" /> */}
      </IconButton>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <IconButton onClick={() => scrollNext()} className="left-arrow" >      
        <ArrowForwardIosIcon
        sx={{fontSize:"30px",
        color:"var(--color2)" ,
        my:"10px"       
}}/>
        {/* <img src={RightArrowIcon} alt="right-arrow" /> */}
      </IconButton>
    );
  };

const HorizontalScrollBar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}
    // sx={{
    //   justifycenter:'center'
    // }}
    // sx={{
    //   display: 'flex',
    //   justifyContent: 'center'
    // }}
    >
        {data?.map((item)=>(
            <Box key={item.id || item}  itemId={item.id || item} title={item.id || item}
                m="0  20px"
                sx={{
                  // border:'2px black solid'
                  padding:"30px"
                }}>
                    {
                        isBodyParts ? (
                            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                        ):(
                            <ExerciseCard exercise={item} />
                        )
                        
                    }                
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar