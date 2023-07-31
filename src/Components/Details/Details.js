import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteQuote, getQuoteById, likeQuote } from "../../firebase-config";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

function QuoteDetails() {
  const params = useParams();
  const [quote, setQuote] = useState({});
  const navigate = useNavigate();

  const getQuoteData = () => {
    getQuoteById(params.id)
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuoteData();
  }, []);

  const likeHandler = () => {
    likeQuote(params.id, quote.likes + 1)
      .then(() => {
        getQuoteData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteQuoteHandler = async () => {
    try {
      await deleteQuote(params.id);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="quote-details">
      <Card
        key={quote.id}
        sx={{
          marginTop: "2rem",
          marginBottom: "1rem",
          marginLeft: "25%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          boxshadow: "30px 5px 37px -8px rgba(0,0,0,0.75)",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            {quote.text}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {quote.author}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {quote.source}
          </Typography>
          <Button variant="outlined" onClick={() => deleteQuoteHandler()}>
            Delete
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate(`/quote/${params.id}/edit`)}
          >
            Edit
          </Button>
          <Button variant="text" onClick={likeHandler}>
            <FavoriteTwoToneIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuoteDetails;
