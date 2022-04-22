import React from "react";
import { Progress, Button, ButtonGroup, Checkbox } from "@chakra-ui/react";
import Card from "./Card";
import styles from "../../styles/styles.css"

const ProgressBar = ({ data, setData }) => {
  const [progress, setProgress] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const selectedProgress = React.useRef([React.createRef(null)]);
  console.log(data.length);

  return (
    <>
      <div
        className={styles.progressContainer}
      >
        <Progress
          className={styles.progress}
          colorScheme="green"
          size="lg"
          value={progress}
        />
        <ButtonGroup
          style={{
            zIndex: 2,
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {data.map((item) => (
            <>
              <Button
                key={item.id}
                ref={selectedProgress}
                variantColor="green"
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
                display={item.id === current ? "block" : "none"}
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
    </>
  );
};

export default ProgressBar;
