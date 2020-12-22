import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function MovieTrailerButton({ trailerUrl, buttonText, title }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const body = (
    <div style={modalStyle} className={classes.default}>
        <iframe
          width="800"
          height="600"
          title={title}
          src={trailerUrl}
          frameBorder="0"
          allowFullScreen
        />
    </div>
  );

  return (
    <div className="movie-trailer-button">
      <Button type="button" color="inherit" onClick={() => setOpen(true)}>
        { buttonText }
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        { body }
      </Modal>
    </div>
  );
}

MovieTrailerButton.propTypes = {
  trailerUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const getModalStyle = () => ({
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const useStyles = makeStyles((theme) => ({
  default: {
    position: 'absolute',
    backgroundColor: 'rgb(2, 4, 24)',
    padding: theme.spacing(1, 1, 2),
  },
}));
