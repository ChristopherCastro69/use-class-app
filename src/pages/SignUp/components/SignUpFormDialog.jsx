import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import useSignUp from "../hooks/useSignUp";
import { BRAND_NAME } from "../../../data/config.constants";
import { observer } from "mobx-react";
import AuthRegisterViewModel from "../../../viewModels/AuthRegisterViewModel";

const SignUpFormDialog = observer(({ isModalOpen }) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    emailError,
    emailErrorMsg,
    passwordError,
    passwordErrorMsg,
    handleLinkSignIn,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  } = useSignUp();

  const handleClose = () => {
    AuthRegisterViewModel.toggleSignUpModal();
  };
  return (
    <Dialog open={isModalOpen} onClose={handleClose}>
      <DialogTitle textAlign={"center"}>Join {BRAND_NAME}.</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              autoFocus
              margin='dense'
              label='First Name'
              fullWidth
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <TextField
              autoFocus
              margin='dense'
              label='Last Name'
              fullWidth
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </Box>
          <TextField
            margin='dense'
            label='Email Address'
            type='email'
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? emailErrorMsg : ""}
            required
          />
          <TextField
            margin='dense'
            label='Password'
            type='password'
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            required
          />
          <TextField
            margin='dense'
            label='Confirm Password'
            type='password'
            fullWidth
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={passwordError}
            helperText={passwordError ? passwordErrorMsg : ""}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant='contained'
            type='submit'
            sx={{ marginRight: "24px" }}
          >
            Sign Up
          </Button>
        </DialogActions>
      </form>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant='body4'>
          Already have an account?{" "}
          <Button onClick={handleLinkSignIn} underline='none'>
            Sign In
          </Button>
        </Typography>
      </DialogContent>
    </Dialog>
  );
});

export default SignUpFormDialog;
