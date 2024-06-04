import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import BasicCard from "./Card"; // Import BasicCard component

export default function InputWithIcon() {
  const [error, setError] = useState(""); // Initialize state to handle errors
  const [books, setBooks] = useState([]); // State to store fetched books

  const fetchApi = async (query) => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const query = e.target.value;
    fetchApi(query);
  };

  return (
    <Box marginY={8} sx={{ "& > :not(style)": { m: 1 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <SearchIcon sx={{ paddingRight: "5px" }} />
        <TextField
          id="input-with-sx"
          label="Book Name"
          variant="standard"
          size="large"
          onChange={handleChange}
        />
      </Box>
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <BasicCard
              author={book.author_name && book.author_name[0]}
              publishedYear={book.first_publish_year}
              title={book.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
