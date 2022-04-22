import React, { useState } from "react";
import Header from "../shared/Header";
import JourneyCardList from "../shared/JourneyCardList";
import LoggedHeader from "../shared/LoggedHeader";

const Homepage = () => {
  // Global variables passing around
  const [isLoggedIn, setLogged] = useState(false);
  const [username, setUsername] = useState("john_smith_123");

  return (
    <>
      {isLoggedIn ? <LoggedHeader username={username} /> : <Header />}

      {/* Layout placed under header */}
      <div style={{ minWidth: "100vw", minHeight: `calc(100vh - 56px)` }}>
        <div
          style={{
            padding: "20px 24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "0 auto",
            maxWidth: "1248px",
          }}
        >
          <div>
            <JourneyCardList style={{ display: "block" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
