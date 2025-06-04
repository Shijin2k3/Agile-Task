import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { Line, LineChart, BarChart, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, Pie, Cell } from 'recharts';

const data = [
  { name: 'jan', value: 30 },
  { name: 'feb', value: 40 },
  { name: 'mar', value: 55 },
  { name: 'apr', value: 65 },
  { name: 'may', value: 85 },
];
const cardStyle = {
  p: { xs: 1, sm: 2 },
  minHeight: { xs: 120, sm: 160, md: 180 },
  minWidth: { xs: 180, sm: 220, md: 300 },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1f2937',
  color: "white",
  cursor: 'pointer',
};
const pieColors = ["#f59e42", "#4ade80", "#8884d8", "#f43f5e", "#fbbf24"];

const Charts = () => {
  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 5 }} sx={{ p: { xs: 1, sm: 2, md: 4 } }}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={cardStyle}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <ResponsiveContainer width="100%" height={180}>
             <LineChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
               <XAxis dataKey="name" stroke="#fff" />
               <YAxis stroke="#fff" width={30} />
               <Tooltip />
               <Line type="monotone" dataKey="value" stroke="#8884d8" />
             </LineChart>
           </ResponsiveContainer>
          </Box>
          <Typography variant="body2" sx={{ mt: 1 }}> Sales overview</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={cardStyle}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ResponsiveContainer width="100%" height={180}>
               <BarChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                 <XAxis dataKey="name" stroke="#fff" />
                 <YAxis stroke="#fff" width={30} />
                 <Tooltip />
                 <Bar dataKey="value">
                   {data.map((entry, index) => (
                     <Cell key={`cell-bar-${index}`} fill={pieColors[index % pieColors.length]} />
                   ))}
                 </Bar>
               </BarChart>
            </ResponsiveContainer>
          </Box>
          <Typography variant="body2" sx={{ mt: 1 }}>Sales overview</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} sx={cardStyle}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>
          <Typography variant="body2" sx={{ mt: 1 }}>Sales overview</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Charts