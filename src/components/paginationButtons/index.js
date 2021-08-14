import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const PaginationButtons = ({page, setPage, isFetching}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <span>Current Page: {page}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          setPage((old) => old + 1);
        }}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </Paper>
  );
}
export default PaginationButtons;