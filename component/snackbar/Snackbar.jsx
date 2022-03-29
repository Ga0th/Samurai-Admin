import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Index = ({ open, options, onClose }) => {
  const {
    message,
    severity,
    anchorOrigin,
    autoHideDuration
  } = options;

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={() => onClose()}            
    >
      <Alert onClose={() => onClose()} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Index;