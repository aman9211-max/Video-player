import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../assets/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      style={{
        color: "white",
        borderRadius: "12px",
        boxShadow: "10px 10px 5px #3e3e3e",
        margin: "8px 1px",
        width: "360px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 360, height: 200 }}
        ></CardMedia>
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}...
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle.slice(0, 40) ||
                demoChannelTitle.slice(0, 40)}
              <CheckCircle
                sx={{ fontSize: 12, color: "gray", ml: "5px" }}
              ></CheckCircle>
            </Typography>
          </Link>
        </CardContent>
    </Card>
  );
};

export default VideoCard;
