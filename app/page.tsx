  import WebsiteScreen from '@/lib/components/website-screen';
  import { COURSE_WELCOME_TEXT } from '@/lib/config';
  import Image from 'next/image';
  import Link from 'next/link';
  import React from 'react';
  import Box from '@mui/material/Box';
  import Grid from '@mui/material/Grid';
  import Bar from './components/Bar';
  import Calendar from './components/calendar';

  export default function DenseAppBar() {
    return (
      <div>
        <Bar></Bar>
      <div >
      <Box sx={{ display: 'flex', gap: 5 }}>
          <Grid container spacing={5} sx={{ height: '400px' }}>
            <Grid item xs={3} md={3}>
              <h1 id="calendar" style={{ height: '100%' }}>
                Calendar
                <Calendar></Calendar>
              </h1>
            </Grid>
            <Grid item xs={9} md={9}>
              <h1 id="mainpage" style={{ height: '100%' , position: 'relative' }}>
                The main part of the page - questions and explanations
                <p id= "next" style={{ position: 'absolute', bottom: 0, left: 25 }}>
                Next
              </p>
              </h1>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div>
        <h1 id="timeline">
          Timeline         
          
        </h1>
      </div>
    </div>
    );
  }
