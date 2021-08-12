import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        value={props.value}
        onChange={(event) => props.setSearchQuery(event.target.value)}
        label="Search For Movies"
        variant="outlined"
      />
    </form>
  );
}
