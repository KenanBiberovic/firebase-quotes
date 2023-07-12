import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import AddQuote from "./Components/AddQuote/addQuote";
import AllQuotes from "./Components/AllQuotes/allQuotes";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import EditQuote from "./Components/EditQuotes/EditQuote";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllQuotes />} />
            <Route path="/addquotes" element={<AddQuote />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit" element={<EditQuote />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
