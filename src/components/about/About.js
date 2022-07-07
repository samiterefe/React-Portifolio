import React from 'react'
import useStyles from './astyle'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import SamuelImg from '../images/samm1.jpg'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';


import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      primary: {
  
        main: '#424242',
    
      },
      mode: 'dark'
    }
    
  });



const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];





const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


  return (
      <>
      <ThemeProvider theme={darkTheme}>
       <div className={classes.containerDiv} style={{
    color: ""
  }} >
           <Container>
                <Grid container spacing={3} justifyContent='center'>
                <Typography variant="h6" gutterBottom component="div" align='center' className={classes.typoh6}>
                   --- About Me ---
                </Typography>
                </Grid>

                <Grid container spacing={2} justifyContent='center' className={classes.content}>

                       <Grid container item xs={12} md={5} justifyContent='center'  >
                           <img src={SamuelImg} className={classes.img} justifyContent='center'></img>
                       </Grid>
                       <Grid container justifyContent='center' item xs={12} md={7}   >  

                            <Grid item  >
                          
                                <Typography justifyContent='center' variant="h5" className={classes.typoh5} gutterBottom component="div" style={{  fontWeight: 500, marginTop: '60px' }}>
                                Web Developer
                                </Typography>
                                <Typography   variant="body2" gutterBottom className={classes.typobody2}>
                                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                    neque doloribus, cupiditate numquam 
                                </Typography>
                            </Grid>

                            <Grid item  >
                                <Typography justifyContent='center' variant="h5" className={classes.typoh5} gutterBottom component="div" style={{ fontWeight: 500, marginTop: '10px' }}>
                                Student | Computer Science
                                </Typography>
                                <Typography   variant="body2" gutterBottom className={classes.typobody2}>
                                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                    neque doloribus, cupiditate numquam 
                                </Typography>
                            </Grid>


                            <Grid item  >
                                <Typography justifyContent='center' variant="h5" className={classes.typoh5} gutterBottom component="div" style={{ fontWeight: 500, marginTop: '10px' }}>
                                Head | Developers club 
                                </Typography>
                                <Typography   variant="body2" gutterBottom className={classes.typobody2}>
                                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                    neque doloribus, cupiditate numquam 
                                </Typography>
                            </Grid>
                            
                       
                       
                       </Grid>
           
                    


                  
                </Grid>
           </Container>
       

       </div>
       </ThemeProvider>
      </>
     
    
  )
}

export default About