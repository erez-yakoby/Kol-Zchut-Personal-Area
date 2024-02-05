  import WebsiteScreen from '@/lib/components/website-screen';
  import { COURSE_WELCOME_TEXT } from '@/lib/config';
  import Image from 'next/image';
  import Link from 'next/link';
  import React from 'react';
  import Box from '@mui/material/Box';
  import Bar from './components/Bar/Bar';
  import Calendar from './components/calendar';
  import Paper from '@mui/material/Paper';
  import ProgressBar from './components/progressbar';
  import Main from './components/Main/Main';

  export default function DenseAppBar() {
    return (
      <div>
        <Bar></Bar>
      <div>
        <Main></Main>
      </div>
      <div>
        <Box>
        <h1 id="timeline">
          Timeline 
        </h1>
        </Box>
      </div>
    </div>
    );
  }
