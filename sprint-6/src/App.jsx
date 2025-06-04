
import './App.css';
import { Box } from "@mui/material";
import SideBar from './components/SideBar';
import Header from './components/Header';
import DashboardCards from './components/DashboardCards';
import Charts from './components/Charts';
import Cards from './components/Cards';

function App() {
  return (
   <Box sx={{display:'flex' ,height:'100vh'}}>
    <SideBar sx={{backgroundColor:'#1f2937',border:"2px solid gray"}}/>
    <Box sx={{flexGrow:1, p:3,backgroundColor:'#111827',height:'100vh',overflowY:'auto'}}>
      <Header/>
      <Box sx={{maxWidth:'1280px', width:'100%',mx:'auto',display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',


      }}>
       <DashboardCards/>
       <Charts />
       <Cards />
      </Box>
    </Box>

   </Box>
  )
}

export default App
