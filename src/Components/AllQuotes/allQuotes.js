import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotesFromFirestore = async () => {
      try {
        const quotesCollectionRef = collection(db, "quotes");
        const querySnapshot = await getDocs(quotesCollectionRef);

        const fetchedQuotes = [];
        querySnapshot.forEach((doc) => {
          fetchedQuotes.push({ id: doc.id, ...doc.data() });
        });

        setQuotes(fetchedQuotes);
      } catch (error) {
        console.error("Error fetching quotes from Firestore:", error);
      }
    };

    fetchQuotesFromFirestore();
  }, []);

  const deleteQuote = async (id) => {
    const quoteDoc = doc(db, "quotes", id);
    await deleteDoc(quoteDoc);
    window.location.reload();
  };

  return (
    <div>
      {quotes.map((quote) => (
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
            <Link to={`/edit/`}>
              <Button variant="text" color="primary">
                Edit
              </Button>
            </Link>
            <Button
              variant="text"
              color="secondary"
              onClick={() => deleteQuote(quote.id)}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default AllQuotes;
