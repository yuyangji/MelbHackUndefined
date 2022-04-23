import React, { useState } from "react";
import { Progress, Button, ButtonGroup, Checkbox } from "@chakra-ui/react";
import Card from "./Card";
import styles from "../../styles/Journey.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProgressBar = ({ journeyList }) => {
  console.log(journeyList);
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
  const [current, setCurrent] = useState(0);
  // const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <ChakraProvider>
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
                key={`button${item.id}`}
                shadow="md"
                variantcolor="green"
                onClick={() => {
                  // item.id === data.length
                  //   ? setProgress(100)
                  //   : setProgress((item.id / (data.length + 1)) * 100);
                  setCurrent(item.id);
                }}
              >
                {item.title}
              </Button>
              <Checkbox
                className={styles.checkbox}
                style={{ position: "absolute" }}
                display={item.id === current ? "block" : "none"}
                key={`checkbox${item.id}`}
                size="lg"
                onChange={() => {
                  item.id === data.length
                    ? setProgress(100)
                    : setProgress((item.id / (data.length + 1)) * 100);
                }}
              ></Checkbox>
            </>
          ))}
        </ButtonGroup>
      </div>
      <Card
        current={current}
        data={data}
        setData={setData}
        setProgress={setProgress}
      />
    </ChakraProvider>
  );
};

export default ProgressBar;
