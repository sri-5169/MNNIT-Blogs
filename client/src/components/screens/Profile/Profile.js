import React, { useState } from "react";
import "./Profile.css";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ProfileRight from "./ProfileRight";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#5f89f5",
    padding: 20,
    height: "80vh",
    display: "grid",
    gridTemplateColumns: "300px 1fr 50px",
    width: "95%",
    marginLeft: "20px",
    marginRight: "20px",
  },
});
function Profile() {
  const classes = useStyles();
  const [choice, setchoice] = useState("");
  const changeChoice = (value) => {
    setchoice(value);
    console.log(choice);
  };
  return (
    <>
      <Paper elevation={10} className={classes.paper}>
        <div className="profile__left">
          <h1>Name</h1>
          <Link onClick={() => changeChoice("home")}>Home</Link>
          <Link value="about" onClick={() => changeChoice("about")}>
            About
          </Link>
          <Link value="education" onClick={() => changeChoice("education")}>
            Education
          </Link>
          <Link value="projects" onClick={() => changeChoice("projects")}>
            Projects
          </Link>
          <Link value="skills" onClick={() => changeChoice("skills")}>
            Skills
          </Link>
          <Link value="interests" onClick={() => changeChoice("interests")}>
            Interests
          </Link>
          <Link
            value="certifications"
            onClick={() => changeChoice("certfications")}
          >
            Certifications
          </Link>
        </div>
        <div className="profile__right">
          <ProfileRight choice={choice} />
        </div>
      </Paper>
    </>
  );
}

export default Profile;
