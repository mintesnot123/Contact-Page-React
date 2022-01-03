import * as React from 'react';
// material ui core components
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function ContactInfoItem({ label, Icon }) {
  return (
    <Stack spacing={2} direction="row">
      {Icon}
      <Typography
        sx={{ fontSize: 12 }}
        component="h4"
        variant="body1"
        color={'#e0e0e0'}
      >
        {label}
      </Typography>
    </Stack>
  );
}

export default ContactInfoItem;
