import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function AddQuote() {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [source, setSource] = useState("");

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleAddQuote = async () => {
    if (!author || !text || !source) {
      return;
    }

    try {
      const quotesCollectionRef = collection(db, "quotes");
      await addDoc(quotesCollectionRef, { author, text, source });
      setAuthor("");
      setText("");
      setSource("");
      window.location.reload();
    } catch (error) {
      console.error("Error adding quote:", error);
    }
  };

  return (
    <Box
      mt={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        maxWidth="400px"
        p={3}
        border="1px solid #ccc"
        borderRadius="5px"
        bgcolor="#f9f9f9"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Add Quote
        </Typography>
        <TextField
          mt={2}
          label="Author"
          variant="outlined"
          value={author}
          onChange={handleAuthorChange}
          fullWidth
          mb={2}
          gutterBottom
        />
        <TextField
          mt={2}
          label="Quote Text"
          variant="outlined"
          multiline
          rows={4}
          value={text}
          onChange={handleTextChange}
          fullWidth
          mb={2}
          gutterBottom
        />
        <TextField
          mt={2}
          label="Source"
          variant="outlined"
          value={source}
          onChange={handleSourceChange}
          fullWidth
          mb={2}
          gutterBottom
        />
        <Box mt={2}>
          <Button
            variant="contained"
            onClick={handleAddQuote}
            startIcon={<AddCircleOutlineIcon />}
          >
            Add Quote
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddQuote;
