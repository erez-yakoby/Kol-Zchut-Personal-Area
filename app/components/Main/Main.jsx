
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Main.css';

function Main() {
    return(
<Box sx={{ display: 'flex', gap: 5 }}>
<Grid container spacing={5} sx={{ height: '600px' }}>
  <Grid item xs={1} md={1}>
    
    <h1 id="processbar" style={{ height: '100%' }}>
      Progress Bar
    </h1>              
  </Grid>
  <Grid item xs={11} md={11}>
    <h1 id="mainpage" style={{ height: '100%' , position: 'relative', width: '100%' }}>
      The main part of the page - questions and explanations
      <p id= "next" style={{ position: 'absolute', bottom: 0, left: 25 }}>
      המשך
    </p>
    <p style={{ position: 'absolute', bottom: 0, right: 25 }}>
      חזור
    </p>
    </h1>
  </Grid>
</Grid>
</Box>
    );
    }

export default Main