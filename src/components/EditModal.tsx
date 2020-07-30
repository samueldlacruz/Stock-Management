import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface EditModalProps {
    title: string;
    open: boolean;
    description: string;
    onClose: () => void;
    onAction: () => void;
  }

const EditModal: React.FC<EditModalProps> = (props) => {
    const { open, onClose, onAction, children, title, description } = props;
   
    const handleClose = () => {
      onClose();
    };

    const handleAction = () => {
      onAction();
      onClose();
    }

  return (
    <div>
      <Dialog 
      open={open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>
         <DialogContentText>{description}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAction} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditModal;