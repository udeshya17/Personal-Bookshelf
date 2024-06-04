import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
// import { useSnackbar } from "notistack";

const cardStyles = {
  minWidth: 275,
  maxWidth: 300,
  margin: 1,
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
};

export default function BasicCard({ author, publishedYear, title }) {
  const location = useLocation();
  //   const { enqueueSnackbar } = useSnackbar();
  const [addedToBookshelf, setAddedToBookshelf] = useState(false);

  const getAddToBookShelf = () => {
    if (location.pathname === "/" && !addedToBookshelf) {
      return (
        <CardActions>
          <Button size="small" fullWidth onClick={handleAddToBookshelf}>
            Add to bookshelf
          </Button>
        </CardActions>
      );
    }
  };

  const handleAddToBookshelf = () => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    savedBooks.push({ title, author, publishedYear });
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
    // enqueueSnackbar("Added Successfully", {
    //   variant: "success",
    // });
    setAddedToBookshelf(true);
  };

  return (
    <Card sx={cardStyles}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Author: {author}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Published Year: {publishedYear}
        </Typography>
      </CardContent>
      {getAddToBookShelf()}
    </Card>
  );
}
