import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardActions } from '@mui/material';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CardGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {useParams} from 'react-router-dom';

function Cards({ props }) {

  const movies = useContext(AppContext);
  const url = "https://image.tmdb.org/t/p/w500";

 

  return (
    <Row col={1} md={0} className="g-4">
    <CardGroup>
      {movies.map((movie) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" style_size='200px' src={url + movie.poster_path} />
          <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Button variant="primary">+ Info</Button>
          </Card.Body>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon color="action" />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </CardGroup>
    </Row>
  );
}

export default Cards;