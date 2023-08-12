import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAPI } from "../assets/fetchAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  console.log(searchTerm)
  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        <span style={{ color: "#fff" }}>Search Results for:</span>{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
