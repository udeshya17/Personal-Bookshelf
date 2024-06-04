import React from "react";
import ButtonAppBar from "./AppBar";
import BasicCard from "./Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BookShelf() {
  const [personalBookshelf, setPersonalBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setPersonalBookshelf(savedBookshelf);
  }, []);

  return (
    <div>
      <ButtonAppBar />
      <Typography
        variant="h5"
        marginY={3}
        gutterBottom
        sx={{ color: "#6e6b63" }}
      >
        My Bookshelf
      </Typography>
      <Button
        variant="outlined"
        sx={{ color: "#6e6b63", borderColor: "#6e6b63" }}
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Clear
      </Button>
      <Grid container spacing={3}>
        {console.log(personalBookshelf)};
        {personalBookshelf.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <BasicCard
              author={book.author}
              publishedYear={book.publishedYear}
              title={book.title}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
