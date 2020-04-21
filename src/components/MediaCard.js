import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimplePopover from "./SimplePopover";

const useStyles = makeStyles({
  root: {
    width: "550px",
    height: "150px",
    margin: "30px",
    border: "2px solid black",
    padding: "10px",
  },
  childOfRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 0,
  },
  media: {
    height: "140px",
    width: "140px",
    padding: 0,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default function MediaCard({ data }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={12}>
      <CardActionArea className={classes.childOfRoot}>
        <CardMedia className={classes.media} image={data.artworkUrl100} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.trackName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.artistName}
          </Typography>
          <SimplePopover
            data={data}
            style={{
              padding: "0",
              marginTop: "24px",
              display: "flex",
              justifyContent: "flex-start",
            }}
            size="small"
            color="primary"
          >
            Learn More
          </SimplePopover>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
