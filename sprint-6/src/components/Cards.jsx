import { Grid, Paper, Typography, Box } from '@mui/material'
import React from 'react'
import {  ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar, Cell } from 'recharts'

const chartData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 35 },
  { name: 'Wed', value: 30 },
  { name: 'Thu', value: 50 },
  { name: 'Fri', value: 40 },
  { name: 'Sat', value: 55 },
];

const barColors = ["#f59e42", "#4ade80", "#8884d8", "#f43f5e", "#fbbf24"];

const cardData = [
  {
    title: "Project Status",
    content: "3 projects are on track. 1 project needs attention.",
    stat: "3/4 On Track",
    bgcolor: "#1f2937", 
    color: "#fff",
    chart: "bar"
  }
]

const cardStyle = {
  p: { xs: 2, sm: 3 },
  minHeight: { xs: 160, sm: 180, md: 200 },
  minWidth: { xs: 180, sm: 220, md: 1000 }, 
 
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  boxShadow: '0 4px 24px 0 rgba(31,41,55,0.10)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.04)',
    boxShadow: '0 8px 32px 0 rgba(31,41,55,0.18)',
    opacity: 0.98,
  },
  position: 'relative',
  overflow: 'hidden'
}
const Cards = () => (
  <Grid container spacing={{ xs: 2, sm: 4, md: 5 }} sx={{ p: { xs: 1, sm: 2, md: 4 } }}>
    {cardData.map((item, idx) => (
      <Grid item xs={12} sm={6} key={idx}>
        <Paper
          elevation={3}
          sx={{
            ...cardStyle,
            backgroundColor: item.bgcolor,
            color: item.color
          }}
        >
          <Box sx={{ zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: item.color, mb: 1, fontWeight: 700, letterSpacing: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={{ color: item.color, textAlign: 'center', mb: 2 }}>
              {item.content}
            </Typography>
            {item.chart === "bar" && (
              <Box sx={{ width: '100%', height: 80, mb: 1 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#fff" tick={{ fontSize: 12, fill: "#fff" }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="value">
                      {chartData.map((entry, i) => (
                        <Cell key={`cell-bar-${i}`} fill={barColors[i % barColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            )}
            <Typography variant="subtitle2" sx={{ color: item.color, opacity: 0.8, fontWeight: 600 }}>
              {item.stat}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    ))}
  </Grid>
)

export default Cards