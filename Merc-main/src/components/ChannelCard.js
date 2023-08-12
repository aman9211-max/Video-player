import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../assets/constants'

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Box 
    sx={{
    boxShadow:'none',
    borderRadius:'25px',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    width:{xs:'356px',md:"358px"},
    height:'326px',
    margin:'auto',
    marginTop:marginTop
    }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex',
            flexDirection:'Column',
            justifyContent:'center',
            textAlign:'center',
            color:'#fff'
            }}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{
                        borderRadius:'50%',
                        height:'180px',
                        width:'180px',
                        border:"1px solid #e3e3e3"
                    }}
                >
                </CardMedia>
                <Typography variant='h6' sx={{color:'white'}}>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize:14, color:'gray',ml:"5px"}}></CheckCircle>
                </Typography>
                {channelDetail?.statistics?.subscriberCount&&(
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>        
        </Link>
        
    </Box>
  )
}

export default ChannelCard