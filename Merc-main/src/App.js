import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {Box} from "@mui/material"
import './App.css';
import { Navbar } from './components/Navbar.js';
import ChannelDetail from './components/ChannelDetail';
import VideoDetail from './components/VideoDetail';
import Feed from './components/Feed.js'
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{background:"#000"}}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Feed></Feed>}></Route>
          <Route path="/video/:id" exact element={<VideoDetail></VideoDetail>}></Route>
          <Route path="/channel/:id" exact element={<ChannelDetail></ChannelDetail>}></Route>
          <Route path="/search/:searchTerm" exact element={<SearchFeed></SearchFeed>}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
