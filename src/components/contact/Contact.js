import React from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useStyles from './cstyle'
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { color } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';




const Contact = () => {
    const classes = useStyles()
  return (
    <div className={classes.divCont}>
        <Container >
            
        
            <Typography className={classes.contactMe} style={{marginBottom: '100px'}} justifyContent='center' variant="h5" gutterBottom component="div">
               -- contact me -- 
            </Typography>  
       
        <Grid container spacing={2} Container justifyContent='center' style= { {textAlign: "center"}} >
    
            <Grid style= { {textAlign: "center"}} Container container justifyContent='center' xs={12} md={6}>
                 
              <Box  className={classes.fieldBox}

                  
                    sx={{
                        width: 450,
                        maxWidth: '100%',
                    }}
                    >
                    <TextField fullWidth 
                    
                     label="Full Name" 
                     id="name" 
                     helperText=""
                     />
                </Box>
                <Box  className={classes.fieldBox}
                    sx={{
                        width: 450,
                        maxWidth: '100%',
                    }}
                    >
                    <TextField fullWidth 
                     label="Email" 
                     id="email" 
                     helperText=""
                     />
                </Box>
                <Box  className={classes.fieldBox}
                    sx={{
                        width: 450,
                        maxWidth: '100%',
                    }}
                    >
                    <TextField fullWidth 
                     label="Message" 
                     id="massage" 
                     multiline
                     rows={4}
                     helperText=""
                     />
                </Box>
                <Stack direction="row" spacing={2}>

                <Button variant="contained" 
                
                style={{  backgroundColor: '#424242' }} 
                sx={{
                    width: 450,
                    maxWidth: '100%',
                }}
                
                endIcon={<SendIcon />}>
                    Send Message
                </Button>
                </Stack>
                
            </Grid>
            <Grid xs={12} md={6} className={classes.contactText}>
                <Typography style={{ fontWeight: 300, color: '#424242', marginTop: '50px' }} className={classes.contactText}  variant="body2" gutterBottom component="div">
                  Hire me. I can support your your project to fullest. 
               </Typography> 
               <Typography style={{ fontWeight: 600, color: '#424242' }} className={classes.contactText}  variant="h6" gutterBottom component="div">
                  Hire me. I can support your project to    fullest. 
               </Typography>  
               <Box sx={{ width: '100%' }}>
                 <LinearProgress color="inherit"  />

                 <div className={classes.addressIcons} Container justifyContent='center' >

                        <Grid container Container  spacing={2} justifyContent='center' >

                                        
                                <Grid item xs={3} container direction="column"  spacing={0}>
                                    <Grid> 
                                        <CallIcon fontSize= 'large' style={{ fontSize: '2rem', marginRight: '2px'}}/> 
                                        
                                    </Grid>
                                    <Grid   >
                                    <Typography variant='body2'>0968545946</Typography>
                                    <Typography variant='body2'>0933207093</Typography>

                                    </Grid>
                                </Grid>
                                <Grid  item xs={4} direction="column" alignItems="center" container justifyContent="center"  spacing={0}>
                                    <Grid> 
                                        <HomeIcon fontSize= 'large' style={{ fontSize: '2rem', marginRight: '2px'}}/> 
                                        
                                    </Grid>
                                    <Grid   >
                                    <Typography variant='body2'>Adama, Ethiopia</Typography>
                                   

                                    </Grid>
                                </Grid>
                                <Grid  item xs={5} direction="column" alignItems="center" container justifyContent="center" spacing={0}>
                                    <Grid> 
                                        <EmailIcon fontSize= 'large' style={{ fontSize: '2rem', marginRight: '2px'}}/> 
                                        
                                    </Grid>
                                    <Grid   >
                                    <Typography variant='body2'>samuelterefe2@gmail.com</Typography>
                                   

                                    </Grid>
                                </Grid>

                        </Grid>        




                 </div>
                
                <div className={classes.gridleftIcon} Container justifyContent='center'>
                    <Grid item xs={12} md={12} container Container justifyContent='center'  >
                        <LinkedInIcon fontSize= 'large' style={{ fontSize: '3rem', marginRight: '2px'}}/>
                        <InstagramIcon fontSize= 'large'  style={{ fontSize: '3rem', marginRight: '2px'}}/>
                        <FacebookIcon fontSize= 'large' style={{ fontSize: '3rem', marginRight: '2px'}}/> 
                        <GitHubIcon fontSize= 'large' style={{ fontSize: '3rem', marginRight: '2px'}}/>
                    </Grid>
                </div>
                
                </Box>
            </Grid>
        </Grid>


        </Container>

    </div>
  )
}

export default Contact