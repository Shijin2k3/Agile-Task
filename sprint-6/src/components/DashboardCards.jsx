import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const cardStyle = {
  p: { xs: 1, sm: 2 },                
  minHeight: { xs: 80, sm: 100 },     
  minWidth: { xs: 140, sm: 200 },    
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: 3,
  boxShadow: '0 4px 24px 0 rgba(31,41,55,0.10)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.04)',
    boxShadow: '0 8px 32px 0 rgba(31,41,55,0.18)',
    opacity: 0.95,
  },
}

const cardData = [
  { title: "Daily Sales", value: "$1,200", subtitle: "Today", bgcolor: "#f43f5e", color: "#fff" },
  { title: "New Users", value: "150", subtitle: "This Week", bgcolor: "#4ade80", color: "#1f2937" },
  { title: "Active Projects", value: "12", subtitle: "Ongoing", bgcolor: "#f59e42", color: "#1f2937" },
  { title: "Feedback", value: "32", subtitle: "This Month", bgcolor: "#8884d8", color: "#fff" }
];

const DashboardCards = () => {
  return (
    <Grid container spacing={{ xs: 2, sm: 4, md: 5 }} sx={{ p: { xs: 1, sm: 2, md: 4 } }}>
      {cardData.map((item, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Paper elevation={3} sx={{ ...cardStyle, backgroundColor: item.bgcolor, color: item.color }}>
            <Typography
              variant="h6"
              sx={{
                color: item.color,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                fontWeight: 700,
                letterSpacing: 1,
                mb: 1,
                textAlign: 'center'
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                my: 1,
                color: item.color,
                fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2rem' },
                fontWeight: 900,
                textAlign: 'center'
              }}
            >
              {item.value}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: item.color,
                opacity: 0.85,
                fontSize: { xs: '0.85rem', sm: '1rem' },
                textAlign: 'center'
              }}
            >
              {item.subtitle}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default DashboardCards