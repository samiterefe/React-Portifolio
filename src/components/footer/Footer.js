import React from 'react'
import useStyles from './fstyle'
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

const Footer = () => {
    const classes = useStyles()
  return (
    <>
    <div className={classes.divCont}>

      <Container>
        
         <Grid container justifyContent='center'>
         
          
            <Typography variant="body2" gutterBottom   container justifyContent='center' style={{ width: '60%', textAlign: 'center', marginTop: '30px' }} >
              Footer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam. &copy;
            </Typography>

      
        
                <Grid container justifyContent='center' item xs={12} md={6} style={{  marginTop: '20px',  }}  >
                      <LinkedInIcon fontSize= 'large'  style={{  margin: '10px',  }}  />
                      <InstagramIcon fontSize= 'large' style={{  margin: '10px',  }} />
                      <FacebookIcon fontSize= 'large' style={{  margin: '10px',  }} /> 
                      <GitHubIcon fontSize= 'large' style={{  margin: '10px',  }} />
                </Grid>

                <Typography variant="body2" gutterBottom   container justifyContent='center' style={{ width: '60%', textAlign: 'center', marginTop: '30px' }} >
              Adama, Ehhiopia &copy; 2020
            </Typography>
        
        </Grid>



      </Container>


    </div>

    
    </>
  )
}

export default Footer