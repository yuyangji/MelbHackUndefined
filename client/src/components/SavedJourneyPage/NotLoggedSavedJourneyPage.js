import React from "react";
import { Card, Row, Col } from "react-bootstrap";
const NotLoggedSavedJourneyPage = () => {
  return (
    <>
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
            <>
              <div style={{ marginBottom: "15px", marginTop: "10px" }}>
                <Card
                  body
                  style={{
                    minWidth: "780px",
                    maxWidth: "890px",
                    width: "780px",
                    height: "240px",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <Row>
                    <Col
                      style={{
                        fontWeight: "500",
                        color: "grey",
                        textAlign: "center",
                      }}
                    >
                      You must log in to view saved journeys.
                    </Col>
                  </Row>
                </Card>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLoggedSavedJourneyPage;
