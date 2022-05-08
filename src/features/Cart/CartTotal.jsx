import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartTotalSelector } from './selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgb(255, 255, 255)',
    padding: theme.spacing(2),
    width: '100%',
    boxSizing: 'border-box',
  },

  priceItems: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgb(244, 244, 244)',
    paddingBottom: '20px',
  },

  priceText: {
    fontWeight: '400',
    fontSize: '16px',
    color: 'rgb(162, 162, 162)',
  },

  provisional: {
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'right',
  },

  priceTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
  },

  priceValue: {
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'right',
    color: 'rgb(254, 56, 52)',
    fontSize: '22px',
    fontWeight: '400',
  },

  commentMassage: {
    fontWeight: '400',
    fontSize: '14px',
    color: 'rgb(162, 162, 162)',
    marginTop: '4px',
  },

  checkoutBtn: {
    background: 'rgb(255, 66, 78)',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    width: '100%',
    marginTop: '16px',
    padding: '12px 10px',
    borderRadius: '4px',
    '&:hover': {
      background: 'rgb(255, 15, 30)',
      cursor: 'pointer',
    },
  },
}));

function CartTotal(props) {
  const classes = useStyles();
  const cartTotal = useSelector(cartTotalSelector);
  return (
    <>
      <Box className={classes.root}>
        <Box>
          <Box className={classes.priceItems}>
            <span className={classes.priceText}>Tạm tính</span>
            <span className={classes.provisional}>{formatPrice(cartTotal)}</span>
          </Box>
          <Box className={classes.priceTotal}>
            <span className={classes.priceText}>Thành tiền</span>
            <span className={classes.priceValue}>
              {formatPrice(cartTotal)}
              <span className={classes.commentMassage}>(Đã bao gồm VAT nếu có)</span>
            </span>
          </Box>
        </Box>
      </Box>
      <Button className={classes.checkoutBtn}>Tiến hành đặt hàng</Button>
    </>
  );
}

export default CartTotal;
