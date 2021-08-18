import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const PaginationButtons = ({page, setPage, isFetching}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography><span>Current Page: {page}</span><br/></Typography>
      <Button variant="outlined" color="primary"
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Previous Page
      </Button>{" "}
      <Button variant="outlined" color="primary"
        onClick={() => {
          setPage((old) => old + 1);
        }}
      >
        Next Page
      </Button>
      {isFetching ? <span><br/> Loading...</span> : null}{" "}
    </Paper>
  );
}
export default PaginationButtons;