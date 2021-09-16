
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: 345,
        maxHeight: 650,
        margin: 20,
        border: "1px solid green"

    },
    media: {
        height: 200,
        width: 200
    },
    titleHeight: {
        height: 50,
        textOverflow: "ellipsis",
        overflow: "hidden"
    }
});
function ApiCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <h2>{props.apiName}</h2>
                    <h4>{props.apiType}</h4>
                    <p>{props.description}</p>
                    <p style={{ color: "black", font: "bold", fontSize: "18PX" }}>${props.price}</p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="secondary">
                <Link to={`/api/${props.id}`}>Details</Link>
            </Button>
            </CardActions>
        </Card>
    );
}

export default ApiCard;