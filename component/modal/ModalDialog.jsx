import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  halfRoot: {
    alignItems: 'flex-end' // push the dialog to bottom
  },
  halfPaper: {
    // make the content full width
    margin: 0,
    maxWidth: '100%',
    width: '100%'
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}));

const ModalDialog = ({ open, options, onCancel, onConfirm, onClose }) => {
  const classes = useStyles();
  const {
    title,
    description,
    confirmationText,
    cancellationText,
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
    fullScreen,
    halfScreen,
    fullWidth,
    showConfirm,
    showCancel,
    showClose
  } = options;

  return (
    <Dialog fullScreen={fullScreen} fullWidth={fullWidth} {...dialogProps} open={open} onClose={onClose} classes={halfScreen ? { container: classes.halfRoot, paper: classes.halfPaper } : {}}>
      {title && (
        <DialogTitle disableTypography className={classes.dialogTitle}>
          <Typography variant="h5">{title}</Typography>
          {showClose && <IconButton onClick={onCancel}>
            <Icon>close</Icon>
          </IconButton>}
        </DialogTitle>
      )}
      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        {showCancel && <Button {...cancellationButtonProps} onClick={onCancel}>
          {cancellationText}
        </Button>}
        {showConfirm && <Button color="primary" {...confirmationButtonProps} onClick={onConfirm}>
          {confirmationText}
        </Button>}
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;