import * as React from 'react';
import PropTypes from 'prop-types';
import Button, { ButtonProps } from '@mui/material/Button';
import { AuthenticationContext } from '../AppProvider';
import { useLocaleText } from '../AppProvider/LocalizationProvider';
import { AccountLocaleContext } from './AccountLocaleContext';

/**
 *
 * Demos:
 *
 * - [Account](https://mui.com/toolpad/core/react-account/)
 *
 * API:
 *
 * - [SignInButton API](https://mui.com/toolpad/core/api/sign-in-button)
 */
function SignInButton(props: ButtonProps) {
  const authentication = React.useContext(AuthenticationContext);
  const globalLocaleText = useLocaleText();
  const accountLocaleText = React.useContext(AccountLocaleContext);
  const localeText = { ...globalLocaleText, ...accountLocaleText };

  return (
    <Button
      disableElevation
      variant="contained"
      size="small"
      onClick={authentication?.signIn}
      sx={{
        textTransform: 'capitalize',
        filter: 'opacity(0.9)',
        width: '50%',
        margin: (theme) => `${theme.spacing(1)} auto`,
        transition: 'filter 0.2s ease-in',
        '&:hover': {
          filter: 'opacity(1)',
        },
      }}
      {...props}
    >
      {localeText?.accountSignInLabel}
    </Button>
  );
}

SignInButton.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
} as any;

export { SignInButton };
