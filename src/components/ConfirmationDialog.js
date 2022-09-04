import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button
} from "@mui/material";

const ConfirmationDialog = (props) => {
  const { onConfirm, openDialog, setOpenDialog } = props;

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog onClose={handleCancel} open={openDialog}>
      <DialogTitle>Are you sure you want to reset?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Resetting all data will remove your saved champions, skins, and reset the current state of the application to default.
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