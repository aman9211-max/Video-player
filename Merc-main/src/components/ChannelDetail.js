import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchAPI } from '../assets/fetchAPI'

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos] = useState([])
  const {id} = useParams();
  useEffect(()=>{
    fetchAPI(`channels?.part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
  },[id])
  // console.log(videos)
  return (
    <Box minHeight="95vh">  
      <Box>
        <div style={{
        background: "linear-gradient(90deg, rgba(114,36,166,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        zIndex:10,
        height:'300px'
        }}>
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-5rem'></ChannelCard> 
      </Box>
      <Box display="flex" p="2">
        <Box />
          <Videos videos={videos}></Videos>
      </Box>
    </Box>
  )
}

export default ChannelDetail