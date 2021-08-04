import React from "react";
import "./App.css";
import { Button } from "antd";
import { createUseStyles } from "react-jss";
import { theData } from "./data.js";

function App() {
  const onExport = () => {
    alert("Export the Json to QuickBooks");
    // Put the export code here
  };

  const style = useStyles();
  return (
    <div className={style.header}>
      <Button onClick={onExport} className={style.button}>
        Export to QuickBooks
      </Button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
        <div></div>
        <pre className={style.data}>
          <br />
          <big>
            <big>Use this data for the export:</big>
          </big>
          <br />
          <br />
          {JSON.stringify(theData, null, 2)}
        </pre>
        <div></div>
      </div>
    </div>
  );
}

export default App;

const useStyles = createUseStyles({
  button: {
    backgroundColor: "white",
    fontSize: "20px",
  },
  header: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    color: "white",
    paddingTop: "50px",
  },
  data: {},
});
