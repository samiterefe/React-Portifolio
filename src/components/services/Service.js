import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useStyles from './sstyle';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import containerImg from '../images/bg.jpeg'
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import StorageIcon from '@mui/icons-material/Storage';
import SearchIcon from '@mui/icons-material/Search';



const Service = () => {
    const classes = useStyles();

  return (

    <>
    <div className={classes.containerr} src={containerImg}>
    <Container>
    <Grid container justifyContent="center">
         <Typography variant="h5" gutterBottom component="div" placement="top" className={classes.heading}>
                   What I Do 
         </Typography>
    </Grid>  

    <Grid container justifyContent="center">


    <Box container justifyContent="center"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 400,
        },
      }}
    >
     
      <Paper elevation={16} container justifyContent="center">
         <Grid container justifyContent="center" className={classes.fonticons}>
                 <ComputerIcon  className={classes.fonticons} fontSize='20px' />
        </Grid>
        <Grid container justifyContent="center" className={classes.subtitle2}>
            <Typography variant="subtitle1"   gutterBottom component="div" placement="top">
                  WEB DESIGN & DEVELOPMENT  
            </Typography>
        </Grid> 
        <Grid container justifyContent="center" className={classes.desc}>
        <Typography variant="body2"  justifyContent="center"  gutterBottom component="div" placement="top">
        Custom website design and development, Tailor-made web application development,
         Effective enterprise site development and Effective content management system design and development.
        
        </Typography>
        </Grid>   
      </Paper>
      <Paper elevation={16} container justifyContent="center">
         <Grid container justifyContent="center" className={classes.fonticons}>
                 <SearchIcon className={classes.fonticons} fontSize='20px' />
        </Grid>
        <Grid container justifyContent="center" className={classes.subtitle22}>
            <Typography variant="subtitle1"   gutterBottom component="div" placement="top">
                  SOFTWARE DESIGN & DEVELOPMENT  
            </Typography>
        </Grid> 
        
        <Grid container justifyContent="center" className={classes.desc}>
        <Typography variant="body2"  justifyContent="center"  gutterBottom component="div" placement="top">
        I  develop, maintain or enhance software of all types, Specially Web. From small systems used by a few to major applications with a many users. 
        Whether it is a simple application or highly complex.
        
        </Typography>
        </Grid>   
      </Paper>

      <Paper elevation={16} container justifyContent="center">
         <Grid container justifyContent="center" className={classes.fonticons}>
                 <StorageIcon  className={classes.fonticons} fontSize='20px' />
        </Grid>
        <Grid container justifyContent="center" className={classes.subtitle2}>
            <Typography variant="subtitle1"   gutterBottom component="div" placement="top">
                 DATABASE  DESIGN
            </Typography>
        </Grid> 
        <Grid container justifyContent="center" className={classes.desc}>
        <Typography variant="body2"  justifyContent="center"  gutterBottom component="div" placement="top">
        Custom website design and development, Tailor-made web application development,
         Effective enterprise site development and Effective content management system design and development.
        
        </Typography>
        </Grid>   
      </Paper>

     
    </Box>

    </Grid>
    <Grid container justifyContent="center">
    
            <Typography variant="subtitle2" gutterBottom component="div" placement="top" className={classes.heading}>
                    I am web developer and designer. do you want to hire me 
                    Call: 0933207093 
            </Typography>

            
       
    </Grid>

    </Container>
    </div>
    </>
     
     
   )
  
}

export default Service