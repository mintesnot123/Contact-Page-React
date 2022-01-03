import * as React from 'react';
// material ui core components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
// material ui icons
import TelegramIcon from '@mui/icons-material/Telegram';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SortIcon from '@mui/icons-material/Sort';

import ContactInfoItem from './components/ContactInfoItem';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
  contactInfo: {
    backgroundColor: '#424242',
  },
}));

function ContactPage() {
  const classes = useStyles();
  const [fields, setFields] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const onTextFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Typography
        className={classes.title}
        sx={{ mx: 'auto', mt: 6, mb: 8 }}
        component="h2"
        variant="h3"
      >
        CONTACT US
      </Typography>
      <Grid item xs={12} md={10} xl={10} sx={{ mx: 'auto', mt: 5, mb: 8 }}>
        <Box sx={{ flexGrow: 1, boxShadow: 5 }}>
          <Grid container spacing={1}>
            <Grid item md={8} xs={12}>
              <Box sx={{ flexGrow: 1, pt: 5, pb: 5, pl: 5, pr: 5 }}>
                <Stack spacing={4} sx={{ mx: 2 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <Typography
                      sx={{ fontWeight: 600 }}
                      component="h3"
                      variant="body1"
                    >
                      Send us a Message
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      spacing={0}
                    >
                      <SortIcon sx={{ color: '#bdbdbd', fontSize: 35 }} />
                      <MailOutlineIcon
                        sx={{ color: '#bdbdbd', fontSize: 35 }}
                      />
                    </Stack>
                  </Stack>
                  <Stack spacing={8} direction="row">
                    <TextField
                      label="Your Name"
                      variant="standard"
                      size="large"
                      name="name"
                      onChange={onTextFieldChange}
                    />
                    <TextField
                      label="Email Address"
                      variant="standard"
                      size="large"
                      name="email"
                      onChange={onTextFieldChange}
                    />
                  </Stack>
                  <Stack spacing={8} direction="row">
                    <TextField
                      label="Phone"
                      variant="standard"
                      size="large"
                      name="phone"
                      onChange={onTextFieldChange}
                    />
                    <TextField
                      label="Company"
                      variant="standard"
                      size="large"
                      name="company"
                      onChange={onTextFieldChange}
                    />
                  </Stack>
                  <Stack spacing={8} direction="row" sx={{ mb: 2 }}>
                    <TextField
                      label="Message"
                      variant="standard"
                      size="large"
                      name="message"
                      onChange={onTextFieldChange}
                    />
                  </Stack>
                  <Stack
                    spacing={0}
                    direction="row"
                    sx={{ alignItems: 'center' }}
                  >
                    <Divider sx={{ flexGrow: 1 }} />
                    <IconButton
                      sx={{ bgcolor: '#212121' }}
                      aria-label="fingerprint"
                      color="secondary"
                    >
                      <TelegramIcon sx={{ color: '#e0e0e0' }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
            <Grid item md={4} xs={12} className={classes.contactInfo}>
              <Box sx={{ flexGrow: 1, pt: 5, pb: 5, pl: 8 }}>
                <Typography
                  sx={{ mb: 8, fontSize: 18 }}
                  component="h2"
                  variant="h5"
                  color={'#fafafa'}
                >
                  Contact Information
                </Typography>
                <Stack spacing={8} sx={{ mt: 8 }}>
                  <ContactInfoItem
                    label={'360 King Street'}
                    Icon={
                      <AddLocationIcon
                        sx={{ color: '#bdbdbd', fontSize: 18 }}
                      />
                    }
                  />
                  <ContactInfoItem
                    label={'(800) 900 200 300'}
                    Icon={
                      <SendToMobileIcon
                        sx={{ color: '#bdbdbd', fontSize: 18 }}
                      />
                    }
                  />
                  <ContactInfoItem
                    label={'info.techlabz.com'}
                    Icon={
                      <AttachEmailIcon
                        sx={{ color: '#bdbdbd', fontSize: 18 }}
                      />
                    }
                  />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default ContactPage;
