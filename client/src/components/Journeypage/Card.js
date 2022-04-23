import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";

import { ChatIcon, CheckIcon } from "@chakra-ui/icons";
import { useCheckbox } from "@chakra-ui/react";
import styles from "../../styles/Journey.module.css";

const Content = ({ current }) => {
  return (
    <p>
      <Text>{current ? current.content : ""}</Text>
    </p>
  );
};

const QA = ({ question, answer }) => {
  return (
    <div>
      <ListItem>
        <ListIcon as={ChatIcon} color="green.500" />
        <Text as="u">{question} </Text>
      </ListItem>
      <ListItem>
        <div style={{ marginLeft: "10px" }}>
          <ListIcon as={CheckIcon} color="green.500" />
          {answer}
        </div>
      </ListItem>
    </div>
  );
};

const QABody = () => {
  return (
    <List spacing={3}>
      <QA
        question="Is Python case-sensitive?"
        answer="A language is case-sensitive if it distinguishes between identifiers like myname and Myname.
         In other words, it cares about case- lowercase or uppercase."
      />

      <QA
        question="How would you convert a string into lowercase?"
        answer="We use the lower() method for this. \n >>> 'AyuShi'.lower()"
      />
    </List>
  );
};

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
            <h2 className={styles.title}>{current ? current.title : ""}</h2>
          </div>

          <Tabs
            ariant="soft-rounded"
            colorScheme="green"
            isFitted
            variant="enclosed"
          >
            <TabList>
              <Tab>Content</Tab>
              <Tab>QA</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Content current={current} />
              </TabPanel>
              <TabPanel>
                <QABody />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Card;
