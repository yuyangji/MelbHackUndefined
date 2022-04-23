import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  BsPersonCircle,
  BsBookmark,
  BsChatLeft,
  BsBook,
  BsBookmarkFill,
} from "react-icons/bs";

const JourneyCard = ({ journey, savedList }) => {
  var temp = false;
  for (let saved in savedList) {
    if (savedList[saved].journey_id === journey.journey_id) {
      temp = true;
      break;
    }
  }
  const [isSaved] = useState(temp);

  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <Card
          body
          style={{ minWidth: "780px", maxWidth: "890px", width: "780px" }}
        >
          <Row>
            <Col style={{ fontWeight: "500" }}>
              <BsPersonCircle
                style={{
                  width: "28px",
                  height: "28px",
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              />{" "}
              {journey.creator}
            </Col>
          </Row>

          <Row>
            <Col style={{ fontSize: "x-small", color: "grey" }}>
              {/* random for now until posting time is recorded */}
              Posted {Math.ceil(Math.random() * 20)} hours ago
            </Col>
          </Row>

          <Row>
            <Col style={{ fontSize: "x-large", fontWeight: "bold" }}>
              {journey.title}
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col style={{ fontSize: "small" }}>
              <div>
                <div style={{ display: "inline", marginRight: "10px" }}>
                  <BsBook style={{ marginRight: "4px" }} />
                  {journey.milestone.length} Chapters
                </div>
                <div style={{ display: "inline", marginRight: "10px" }}>
                  <BsChatLeft style={{ marginRight: "4px" }} />
                  {/* random for now until comments are recorded */}
                  {Math.ceil(Math.random() * 100)} Discussion
                </div>
                {isSaved ? (
                  <div
                    style={{
                      display: "inline",
                      marginRight: "10px",
                      color: "blue",
                    }}
                  >
                    <BsBookmarkFill style={{ marginRight: "4px" }} />
                    Saved
                  </div>
                ) : (
                  <div style={{ display: "inline", marginRight: "10px" }}>
                    <BsBookmark style={{ marginRight: "4px" }} />
                    Save
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default JourneyCard;