import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <>
      <Container maxWidth="lg"
        sx={{
          fontSize:"32px",
          display: 'flex', flexWrap: "wrap", justifyContent: "space-evenly", rowGap: "10px",
          height: "100vh",
          backgroundColor: "aqua"
        }}
      >
        <Box
          sx={{
            display: "flex", flexDirection: "column",
            backgroundColor: "red",
            height: "200px", width: { sm:"100%", md:"250px"},
            padding: "15px",
          }}
        >
          <Typography variant='body1' 
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis saepe odit mollitia, et temporibus corporis iusto officia aliquam, pariatur quod, cupiditate dignissimos odio expedita ut? Veritatis eveniet rem similique.</Typography>

          <Button variant='contained'>click here</Button>
        </Box>
        <Box
          sx={{
            display: "flex", flexDirection: "column",
            backgroundColor: "red",
            height: "200px", width: { sm:"100%", md:"250px"},
            fontSize: {sm:"2em", md:"1em"},
            padding: "15px"
          }}
        >
          <Typography variant='body1'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis saepe odit mollitia, et temporibus corporis iusto officia aliquam, pariatur quod, cupiditate dignissimos odio expedita ut? Veritatis eveniet rem similique.</Typography>

          <Button variant='contained'>click here</Button>
        </Box><Box
          sx={{
            display: "flex", flexDirection: "column",
            backgroundColor: "red",
            height: "200px", width: { sm:"100%", md:"250px"},
            fontSize: {sm:"2em", md:"1em"},
            padding: "15px"
          }}
        >
          <Typography variant='body1'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis saepe odit mollitia, et temporibus corporis iusto officia aliquam, pariatur quod, cupiditate dignissimos odio expedita ut? Veritatis eveniet rem similique.</Typography>

          <Button  variant='contained'>click here</Button>
        </Box><Box
          sx={{
            display: "flex", flexDirection: "column",
            backgroundColor: "red",
            height: "200px", width: { sm:"100%", md:"250px"},
            fontSize: {sm:"2em", md:"1em"},
            padding: "15px"
          }}
        >
          <Typography variant='body1'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis saepe odit mollitia, et temporibus corporis iusto officia aliquam, pariatur quod, cupiditate dignissimos odio expedita ut? Veritatis eveniet rem similique.</Typography>

          <Button variant='contained'>click here</Button>
        </Box>
      </Container>

    </>
  )
}

export default App
