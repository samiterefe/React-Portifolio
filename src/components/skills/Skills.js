import { Container } from '@mui/material'
import React from 'react'
import useStyles from './skillstyle'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ToolsImg from '../images/tools2.png';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import reactLogo from '../images/react.png'
import nodeLogo from '../images/node.png'
import mongodbLogo from '../images/mongodb.jpg'
import expressLogo from '../images/js.png'
import muiLogo from '../images/mui.png'
import tailwindLogo from '../images/tailwind.png'
import bootstrapLogo from '../images/bootsrap.png'
import reduxLogo from '../images/redux.png'
import nextLogo from '../images/redux.png'
import socketioLogo from '../images/redux.png'
import sqlLogo from '../images/mysql.png'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import { styled } from '@mui/material/styles';
// import { ThemeProvider, createTheme } from '@mui/material/styles';


// const darkTheme = createTheme({
//   palette: {
//     primary: {

//       main: '#424242',
  
//     },
//     mode: 'dark'
//   }
  
// });



const steps = [
    {
      label: 'My Frontend Skills',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'My Backend Skills',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'With good cummunication skill',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Skills = () => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      <>
      
      <div style={{ marginBottom: '100px', marginTop: '20px'  }}>           
           <Container>
                <Grid container spacing={3} justifyContent='center'>
                  <Typography variant="h6" gutterBottom component="div" align='center' className={classes.typoh6}>
                    --- My Skills  ---
                  </Typography>
                </Grid>
                <Grid container spacing={2}   justifyContent='center' >


           
                    
                    <Grid item xs={12} md={6} justifyContent='center' >  
                     <Container>
                    <Typography variant="h6" gutterBottom component="div"  style={{  fontWeight: 800, color: '#424242'}}>
                      Web Developement | Full Stack
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                     I have an passionated with MERN stuck Development. Having Expreince with React | Redux 
                     Development with Other CSS frameworks. I am interested always try to learn new things in
                     Programming World. Specially I am so interested with web Developement with javaScript.
                      

                   
                        <Grid container spacing={2} columns={16}>
                          <Grid item xs={8}>
                                <h3>Frondend</h3>
                                <ul>
                                  <li>React | Redux </li>
                                  <li>Next Js</li>
                                  <li>Tailwind CSS</li>
                                  <li>Material UI</li>
                                  
                                  
                                </ul>
                              
                          </Grid>
                          <Grid item xs={8}>
                               <h3>Backend</h3>
                                <ul>
                                  <li>Node Js</li>
                                  <li>Express Js</li>
                                  <li>Socket.io</li>
                                  <li>MongoDB</li>
                                  
                           
                                </ul>
                            
                          </Grid>
                        </Grid>
                 

                     
                     
                    </Typography>
           
                      </Container> 

                         
                   </Grid>
                   <Grid direction='column' item container justifyContent='center' xs={12} md={6}   >
                     
                   {/* sx={{
                      width: {
                        xs: '50%',
                        sm: '50%',    
                        md: '50%'
                      }
                     }} */}


                      
                           
                          

<Grid Grid item xs={12} md={6}  container justifyContent='center'>
                       
                
                       <div className={classes.stack1}>
  
                       <Grid  >
                       <Typography variant="body1" gutterBottom component="div" style={{marginLeft: '70px', marginBottom: '10px'}}>
                        Frontend | Backend
                      </Typography>
                      </Grid>
                       <Stack direction="row" spacing={1} className={classes.stack}>
                        
                        <Chip
                          
                          className={classes.stack}
                          avatar={<Avatar alt="Natacha"  src={reactLogo}/>}
                          label="React"
                          variant="outlined"
                          
                        />
                                              <Chip
                          // avatar={<Avatar alt="Natacha" src={muiLogo}/>}
                          // label="Material UI "
                          // variant="outlined"
                        />
                                                     <Chip
                          avatar={<Avatar alt="Natacha" src={tailwindLogo}/>}
                          label=" tailwind "
                          variant="outlined"
                        />
                 
                      </Stack>
  
  
  
                       </div>
                       <div className={classes.stack2}>
                       <Stack direction="row" spacing={1} className={classes.stack}
                       
                       
                       
                       >
                        
                       
                                              <Chip
                          className={classes.stack}
                          avatar={<Avatar alt="Natacha"  src={nextLogo}/>}
                          label="Next Js"
                          variant="outlined"
                          
                        />
                                              <Chip
                          avatar={<Avatar alt="Natacha" src={expressLogo}/>}
                          label="Express "
                          variant="outlined"
                        />
                                              <Chip
                          avatar={<Avatar alt="Natacha" src={nodeLogo}/>}
                          label="Node Js"
                          variant="outlined"
                        />
                                              
                      </Stack>
                           
  
  
                       </div>
                       <div className={classes.stack3}>
                       <Stack direction="row" spacing={1} className={classes.stack}>
  
  
                        
                       <Chip
                          avatar={<Avatar alt="Natacha" src={mongodbLogo}/>}
                          label="MongoDB"
                          variant="outlined"
                        />
                                              <Chip
                          avatar={<Avatar alt="Natacha" src={sqlLogo}/>}
                          label="SQL "
                          variant="outlined"
                        />
                  {/* <Chip avatar={<Avatar>JS</Avatar>} label="Other.." /> */}
                 
                      </Stack>
  
  
  
                       </div>
  
  
                       </Grid>


                              
                            

                       



                    </Grid>
             
                   

                  
                </Grid>

           </Container>
       </div>

      </>
    
  )
}

export default Skills