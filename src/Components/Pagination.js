import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Pagination1({ pageNumber, setPageNumber }) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <div
      className={classes.root}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography style={{ fontFamily: `"Special Elite", cursive` }}>
        Page: {pageNumber}
      </Typography>
      <Pagination
        count={10}
        color="secondary"
        pageNumber={pageNumber}
        onChange={handleChange}
      />
    </div>
  );
}
