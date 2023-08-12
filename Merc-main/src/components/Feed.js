import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import {fetchAPI} from '../assets/fetchAPI'

const Feed = () => {
    const [selectedCategory,setSelectedCategory]=useState('Music')
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        fetchAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>setVideos(data.items))
    },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sm:"column",md:"row"}}}>
        <Box sx={{height:{sm:"auto",md:"92vh"}, borderRight:"1px solid #3d3d3d",px:{sm:0,md:2}}}>
            <Sidebar
            selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
            ></Sidebar>

            <Typography className='copyright' variant='body2' sx={{mt:1.5, color:"#fff"}}>
                Copyright 2023 Merc Pvt. Ltd.
            </Typography>
        </Box>
        <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2}}>
            <Typography variant="h4" 
            fontWeight="bold" mb={2} sx={{color:'white'}} 
            >
                <span style={{color:"#fff"}}>{selectedCategory}</span> <span style={{color:"#f31503"}}>Videos</span>
            </Typography>
            <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed