import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// next
import Image from 'next/legacy/image';

// material-ui
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  RadioGroup,
  Link,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
  TextField,
  Divider
} from '@mui/material';

// project imports
import AddAddress from './AddAddress';
import AddressCard from './AddressCard';
import CartDiscount from './CartDiscount';
import OrderComplete from './OrderComplete';
import OrderSummary from './OrderSummery';
import PaymentCard from './PaymentCard';
import PaymentOptions from './PaymentOptions';
import PaymentSelect from './PaymentSelect';
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import { setPaymentCard, setPaymentMethod } from 'store/reducers/cart';
import { openSnackbar } from 'store/reducers/snackbar';
import { useDispatch } from 'store';

// assets
import { CreditCardOutlined, LockOutlined, LeftOutlined, CheckOutlined, DeleteOutlined } from '@ant-design/icons';
const master = '/assets/images/e-commerce/master-card.png';
const paypalcard = '/assets/images/e-commerce/paypal.png';

// ==============================|| CHECKOUT PAYMENT - MAIN ||============================== //

const Payment = ({ checkout, onBack, onNext, editAddress }) => {
  const dispatch = useDispatch();

  const [type, setType] = useState('visa');
  const [payment, setPayment] = useState(checkout.payment.method);
  const [rows, setRows] = useState(checkout.products);
  const [cards, setCards] = useState(checkout.payment.card);
  const [select, setSelect] = useState(null);

  const [open, setOpen] = useState(false);

  const handleClickOpen = (billingAddress) => {
    setOpen(true);
    if (billingAddress) setSelect(billingAddress);
  };

  const handleClose = () => {
    setOpen(false);
    setSelect(null);
  };

  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (checkout.step > 2) {
      setComplete(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setRows(checkout.products);
  }, [checkout.products]);

  const cardHandler = (card) => {
    if (payment === 'card') {
      setCards(card);
      dispatch(setPaymentCard(card));
    }
  };

  const handlePaymentMethod = (value) => {
    if (value === 'card') {
      setType('visa');
    } else if (value === 'paypal') {
      setType('mastercard');
    } else {
      setType('cod');
    }
    setPayment(value);
    dispatch(setPaymentMethod(value));
  };

  const completeHandler = () => {
    if (payment === 'card' && (cards === '' || cards === null)) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Select Payment Card',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: false
        })
      );
    } else {
      onNext();
      setComplete(true);
    }
  };

  const getImage = (cardType) => {
    if (cardType === 'visa') {
      return <Image src={master} alt="card" width={24} height={16} layout="intrinsic" />;
    }
    if (cardType === 'mastercard') {
      return <Image src={paypalcard} alt="card" width={50} height={14} layout="intrinsic" />;
    }
    return null;
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8} xl={9}>
        <Stack spacing={2} alignItems="flex-end">
          <MainCard title="Payment Method">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AddressCard change address={checkout.billing} handleClickOpen={handleClickOpen} />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <RadioGroup
                    aria-label="delivery-options"
                    value={payment}
                    onChange={(e) => handlePaymentMethod(e.target.value)}
                    name="delivery-options"
                  >
                    <Grid container spacing={2} alignItems="center">
                      {PaymentOptions.map((item, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                          <PaymentSelect item={item} />
                        </Grid>
                      ))}
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
              {type !== 'cod' && (
                <Grid item xs={12}>
                  <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Stack>
                            <InputLabel>Card Number :</InputLabel>
                            <Typography color="textSecondary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                              Enter the 16 digit card number on the card
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            fullWidth
                            InputProps={{
                              startAdornment: type !== 'cod' ? <InputAdornment position="start">{getImage(type)}</InputAdornment> : null,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <CheckOutlined />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Stack>
                            <InputLabel>Expiry Date :</InputLabel>
                            <Typography color="textSecondary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                              Enter the expiration on the card
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={7}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <Stack direction="row" spacing={2} alignItems="center">
                                <TextField fullWidth placeholder="12" />
                                <Typography color="textSecondary">/</Typography>
                              </Stack>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField fullWidth placeholder="2021" />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Stack>
                            <InputLabel>CVV Number :</InputLabel>
                            <Typography color="textSecondary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                              Enter the 3 or 4 digit number on the card
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            fullWidth
                            type="password"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                                  <CreditCardOutlined style={{ fontSize: '1.15rem', color: 'inherit' }} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Stack>
                            <InputLabel>Password :</InputLabel>
                            <Typography color="textSecondary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                              Enter your dynamic password
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                                  <LockOutlined style={{ fontSize: '1.15rem', color: 'inherit' }} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {type !== 'cod' && (
                <Grid item xs={12}>
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button variant="outlined" color="secondary">
                      Cancel
                    </Button>
                    <Button variant="contained" color="primary">
                      Save
                    </Button>
                  </Stack>
                </Grid>
              )}
              <Grid item xs={12}>
                <Stack direction="row" spacing={0} alignItems="center">
                  <Grid item xs={6}>
                    <Divider />
                  </Grid>
                  <Typography sx={{ px: 1 }}>OR</Typography>
                  <Grid item xs={6}>
                    <Divider />
                  </Grid>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} lg={10}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={5}>
                    <PaymentCard type="mastercard" paymentType={type} cardHandler={cardHandler} />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={5}>
                    <PaymentCard type="visa" paymentType={type} cardHandler={cardHandler} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </MainCard>
          <Button variant="text" color="secondary" startIcon={<LeftOutlined />} onClick={onBack}>
            <Typography variant="h6" color="textPrimary">
              Back to Shipping Information
            </Typography>
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Stack>
          <MainCard sx={{ mb: 3 }}>
            <CartDiscount />
          </MainCard>
          <MainCard title="Order Summery" sx={{ borderRadius: '4px 4px 0 0', borderBottom: 'none' }} content={false}>
            {rows.map((row, index) => (
              <List
                key={index}
                component="nav"
                sx={{
                  '& .MuiListItemButton-root': {
                    '& .MuiListItemSecondaryAction-root': {
                      alignSelf: 'flex-start',
                      ml: 1,
                      position: 'relative',
                      right: 'auto',
                      top: 'auto',
                      transform: 'none'
                    },
                    '& .MuiListItemAvatar-root': { mr: '7px' },
                    py: 0.5,
                    pl: '15px',
                    pr: '8px'
                  },
                  p: 0
                }}
              >
                <ListItemButton divider>
                  <ListItemAvatar>
                    <Avatar
                      alt="Avatar"
                      size="lg"
                      variant="rounded"
                      color="secondary"
                      type="combined"
                      src={row.image ? `/assets/images/e-commerce/thumbs/${row.image}` : ''}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Link
                        href={`/apps/e-commerce/product-details/${row.id}`}
                        target="_blank"
                        variant="subtitle1"
                        color="textPrimary"
                        sx={{ textDecoration: 'none' }}
                      >
                        {row.name}
                      </Link>
                    }
                    secondary={
                      <Stack spacing={1}>
                        <Typography color="textSecondary">{row.description}</Typography>
                        <Stack direction="row" alignItems="center" spacing={3}>
                          <Typography>${row.offerPrice}</Typography>
                          <Typography color="textSecondary">{row.quantity} items</Typography>
                        </Stack>
                      </Stack>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton size="medium" color="secondary" sx={{ opacity: 0.5, '&:hover': { bgcolor: 'transparent' } }}>
                      <DeleteOutlined style={{ color: 'grey.500' }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItemButton>
              </List>
            ))}
          </MainCard>
          <OrderSummary checkout={checkout} show={false} />
          <Button variant="contained" sx={{ textTransform: 'none', mt: 3 }} onClick={completeHandler} fullWidth>
            Process to Checkout
          </Button>
          <OrderComplete open={complete} />
        </Stack>
      </Grid>
      <AddAddress open={open} handleClose={handleClose} address={select} editAddress={editAddress} />
    </Grid>
  );
};

Payment.propTypes = {
  checkout: PropTypes.object,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  editAddress: PropTypes.func
};

export default Payment;
