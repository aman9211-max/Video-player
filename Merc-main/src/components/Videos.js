import { Stack,Box } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos, direction}) => {
    // console.log(videos)
  if(!videos?.length) return 'Loading.....';
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,id)=>(
            <Box key={id}>
                {item.id.videoId && <VideoCard video={item}></VideoCard>}
                {item.id.channelId && <ChannelCard video={item} channelDetail={item}></ChannelCard>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos