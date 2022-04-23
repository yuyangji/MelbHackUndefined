import React from "react";
import { Checkbox } from "@chakra-ui/react";
import { useCheckbox } from "@chakra-ui/react";
import styles from "../../styles/Journey.module.css";

const Card = ({ current, setProgress }) => {

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
            <h2>{current ? current.title : ""}</h2>
            {/* <Checkbox
              size="lg"
              onChange={(e) => console.log(e.target.value)}
            ></Checkbox> */}
          </div>
          <p>{current ? current.content : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
