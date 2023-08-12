import React from "react";
import { categories } from "../assets/constants";
import { Stack } from "@mui/material";
import "./Sidebar.css";

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  // const selectedCategory = "New";
  // console.log(setSelectedCategory)
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category"
          onClick={()=>setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory ? "#FC1503" : "none",
            overflow: "visible",
            display: "flex",
            justifyContent: "flex-start",
            padding: "5px 1rem",
            color: "white",
            margin: "1rem 3px",
            borderRadius: "25px",
            gap: "15px",
            border: "none",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              alignItems: "center",
            }}
          >
            {category.icon}
          </span>
          <span style={{ marginTop: "5px", opacity:category.name === selectedCategory?'1':'0.6' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
