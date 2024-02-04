import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box} from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <IconButton onClick={() => scrollPrev()} className="right-arrow">
      <ArrowBackIosIcon
        sx=
        {{
          fontSize:"30px",
          color:"var(--color2)",
          my:"10px"       
        }}
      />        
    </IconButton>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <IconButton onClick={() => scrollNext()} className="left-arrow" >      
      <ArrowForwardIosIcon
        sx=
        {{
          fontSize:"30px",
          color:"var(--color2)" ,
          my:"10px"       
        }}
      />
    </IconButton>
  );
};

const HorizontalScrollBar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {
        data?.map((item)=>(
          <Box 
            key={item.id || item}  
            itemId={item.id || item} 
            title={item.id || item}
            m="0  20px"
            sx=
            {{
              padding:"30px"
            }}
          >
            {
              isBodyParts ? 
              (
                <BodyPart 
                  item={item} 
                  bodyPart={bodyPart} 
                  setBodyPart={setBodyPart} 
                />
              ):
              (
                <ExerciseCard 
                  exercise={item}
                />
              )              
            }                
          </Box>
        ))
      }
    </ScrollMenu>
  )
}
export default HorizontalScrollBar