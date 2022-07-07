import React from 'react'
import useStyles from './hstyle'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/icons-material';
import profileImg from '../images/sam.jpg'
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { LinearProgress } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    primary: {

      main: '#263238',
  
    },
    mode: 'dark'
  }
  
});





const Home = () => {

    const classes = useStyles();

  return (
    <>

    <ThemeProvider theme={darkTheme}>
    <Box sx={{ flexGrow: 1 }}> 
    <Container  className={classes.container} >
    <Grid container spacing={2} >
    
        <Grid item xs={12} md={6} className={classes.gridleft} container justifyContent='center'>
        <Container className={classes.containerLeft} > 
            <Grid item xs={12} md={12} >
             
              <div>Welcome to my Portiflio </div> 

            </Grid>
            <Grid item xs={12} md={12} className={classes.gridleftChild} >
            <h1> I am Full Stack  Web Developer with over 30+ Years of exprience </h1>
            <a href=''></a>
            </Grid>
            <Grid item xs={6} md={6} className={classes.gridleftChild} >
            <Box sx={{ width: '100%' }}>
              <LinearProgress color="inherit"  />
            </Box>
            <Button size='large' variant="contained" color="primary" style={{ marginTop: '30px' }}  className={classes.btn}>Download CV</Button>
            </Grid>
            <div className={classes.gridleftIcon} >
            <Grid item xs={6} md={6} className={classes.gridleftIcon} >
                  <LinkedInIcon fontSize= 'large' />
                   <InstagramIcon fontSize= 'large'/>
                   <FacebookIcon fontSize= 'large'/> 
                   <GitHubIcon fontSize= 'large'/>
            </Grid>
            </div>

            </Container>

        </Grid>
        
        <Grid item xs={12} md={6} container justifyContent='center' >
          <img  src={profileImg}  className={classes.img} justifyContent='center'
          
          sx={{
            height: "400px", 
            width: {
              xs: 100,
              sm: 200,
              md: 300,
              lg: 400,
              xl: 500,
            } 
          }}
          
          
          ></img>
        </Grid>
   </Grid>  
   </Container>
   </Box>
   </ThemeProvider>
      
    </>
  )
}

export default Home