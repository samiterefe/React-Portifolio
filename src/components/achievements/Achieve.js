import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profileImg from '../images/sam.jpg'
import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import csec from '../images/csec2.png'
import sharing1 from '../images/sharing1.jpg'
import sharing2 from '../images/sharing2.jpg'
import webLearning from '../images/webLearning.jpg'
import tailwindLogo from '../images/tailwind.png'
import bootstrapLogo from '../images/bootsrap.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Achieve = () => {
  return (

    <>
       <div>
         
         <Container>

               
               
         <Grid container spacing={2}   justifyContent='center' >
              <Grid item xs={12} md={4} justifyContent='center'>
               
              </Grid> 
              
              <Grid item xs={12} md={8} justifyContent='center'>
                                    
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                       <img className='img' src={csec} />

                    </SwiperSlide>
                    <SwiperSlide><div> <img  src={webLearning} /> </div></SwiperSlide>
                    <SwiperSlide>
                        
                    <img  src={sharing1} /> 

                    </SwiperSlide>
                    <SwiperSlide><img className='img' src={csec} /></SwiperSlide>

                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>

              </Grid>



         </Grid>




              







         </Container>






       </div>
    
    </>



   
  )
}

export default Achieve