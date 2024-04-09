import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { openSignIn } from './signInFormDialogSlice';
import SignInFormDialog from './components/SignInFormDialog';

export default function SignInButton() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Button sx={{ color: '#000' }} onClick={() => dispatch(openSignIn())}>
        Log In
      </Button>

      <SignInFormDialog />
    </React.Fragment>
  );
}
