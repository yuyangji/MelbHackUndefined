import React from "react";
import { Progress, Button, ButtonGroup, Checkbox } from "@chakra-ui/react";
import Card from "./Card";
import styles from "../../styles/Journey.module.css";
import { ChakraProvider } from "@chakra-ui/react";
const ProgressBar = ({ data, setData }) => {
  const [progress, setProgress] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const [isCompleted, setIsCompleted] = React.useState(false);

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
