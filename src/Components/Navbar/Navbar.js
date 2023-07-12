import React from "react";

function Navbar() {
  return (
    <div>
      <header style={{ backgroundColor: "#f2f2f2", padding: "10px" }}>
        <nav>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            <li style={{ display: "inline", marginRight: "10px" }}>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  padding: "5px 10px",
                }}
              >
                All Quotes
              </a>
            </li>
            <li style={{ display: "inline", marginRight: "10px" }}>
              <a
                href="/addquotes"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  padding: "5px 10px",
                }}
              >
                Add Quote
              </a>
            </li>
            <li style={{ display: "inline", marginRight: "10px" }}>
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  padding: "5px 10px",
                }}
              >
                Login
              </a>
            </li>
            <li style={{ display: "inline" }}>
              <a
                href="/register"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  padding: "5px 10px",
                }}
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
