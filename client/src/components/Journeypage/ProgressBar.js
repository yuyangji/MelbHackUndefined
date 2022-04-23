import React, { useState, useEffect } from "react";
import { Progress, Button, ButtonGroup, Checkbox } from "@chakra-ui/react";
import Card from "./Card";
import styles from "../../styles/Journey.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProgressBar = ({ journeyList }) => {
  // id of the journey
  const { id } = useParams();

  // get the journey
  var journeyFound;
  for (let j in journeyList) {
    if (journeyList[j]._id === id) {
      journeyFound = journeyList[j];
    }
  }

  const [journey, setJourney] = useState(journeyFound);
  // `data` is the milestone list of the journey
  const [data, setData] = useState(journey.milestones);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentData, setCurrentData] = useState();
  const [latestProgress, setLatestProgress] = useState(-1);
  const handleClickNode = (idx) => {
    setCurrentData(data[idx]);
  };

  useEffect(() => {
    setCurrentData(data[0]);
  }, []);

  return (
    <ChakraProvider >
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "8rem 0 4rem 0",
        }}
      >
        <Progress
          className={styles.progress}
          shadow="xs"
          colorScheme="green"
          size="lg"
          value={progress}
          style={{
            width: "100%",
            zIndex: 1,
            position: "absolute",
            transition: "all 0.3s",
          }}
        />
        <ButtonGroup
          style={{
            zIndex: 2,
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {data.map((item, index) => (
            <>
              <Button
                style={{ borderRadius: "50px" }}
                key={`button${index}`}
                shadow="md"
                variantcolor="white"
                size='md'
                height='48px'
                width='200px'
                border='2px'
                bg = {currentIndex == index? 'rgba(39,157,71)': "rgb(86,79,203)" }
                borderColor='blue.500'
                _hover= {{ bg: 'rgba(39,157,71,1)' }}
                color = "white"
                onClick={() => {
                  setCurrentIndex(index);
                  handleClickNode(index);
                }}
              >
                {item.title}
              </Button>
              <Checkbox
                className={styles.checkbox}
                style={{ position: "absolute" }}
                display={index === currentIndex ? "block" : "none"}
                key={`checkbox${item.id}`}
                size="lg"
                onChange={(e) => {
                  if (e.target.checked) {
                    if (index > latestProgress) {
                      setLatestProgress(index);
                      setProgress(((index + 1) / (data.length + 1)) * 100);
                    }
                  } else {
                    if (index < latestProgress) {
                      setLatestProgress(index);
                      setProgress(((index + 1) / (data.length + 1)) * 100);
                    }
                  }
                }}
              ></Checkbox>
            </>
          ))}
        </ButtonGroup>
      </div>
      <Card current={currentData} setProgress={setProgress} />
    </ChakraProvider>
  );
};

export default ProgressBar;
