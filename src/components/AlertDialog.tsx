import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface AlertDialogProps {
  title: string;
  open: boolean;
  description: string;
  onClose: () => void;
  onAction: () => void;
}

export default function AlertDialog(props: AlertDialogProps) {
   const { open, onClose, onAction, title, description } = props;
   
   const handleClose = () => {
     onClose();
   };

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            no
          </Button>
          <Button onClick={onAction} color="primary" autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
  );
}