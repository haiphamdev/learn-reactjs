import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 32,
    padding: '0 30px',
  },
});

function CounterFeature() {
  const classes = useStyles();
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      Counter: {counter}
      <div>
        <Button className={classes.root} onClick={handleIncreaseClick}>
          Increase
        </Button>
        <Button className={classes.root} onClick={handleDecreaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CounterFeature;
