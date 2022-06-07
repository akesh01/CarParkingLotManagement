import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SlotCards';

const SlotCards = () => {
  let navigate = useNavigate();

    const EndParking = ()=> {
     navigate('/CarDeregister')
    }

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Car Registration Number
            </Typography>
            <Typography variant="h5" component="div">
             KA19EE5263
            </Typography>
            <br/>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Arrival Time
            </Typography>
            <Typography variant="body2">
              11:20
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Slot Number
            </Typography>
            <Typography variant="body2">
              12
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={EndParking}>END</Button>
          </CardActions>
        </React.Fragment>
      );
      
  return (
    <div>
       <Box sx={{ maxWidth: 275, backgroundColor:"#d2dae2" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </div>
  )
}

export default SlotCards