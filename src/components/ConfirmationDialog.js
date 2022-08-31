import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button
} from "@mui/material";

const ConfirmationDialog = (props) => {
  const { onClose, openDialog, setOpenDialog } = props;

  const handleConfirm = () => {
    onClose();
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog onClose={handleCancel} open={openDialog}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Resetting all data will remove your favorite champions, all skins, and reset the current state of the application.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirm}>Ok</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;