import React from "react";
import { Checkbox } from "@chakra-ui/react";
import { useCheckbox } from "@chakra-ui/react";
import styles from "../../styles/Journey.module.css";

const Card = ({ current, data, setData, setProgress }) => {
  let item = data.find((item) => item.id === current);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>{item ? item.title : ""}</h2>
            {/* <Checkbox
              size="lg"
              onChange={(e) => console.log(e.target.value)}
            ></Checkbox> */}
          </div>
          <p>{item ? item.content : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
