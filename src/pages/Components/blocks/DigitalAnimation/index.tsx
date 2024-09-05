import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const DigitalAnimation = () => {
  const [amount, setAmount] = useState(10.96);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isAnimating) {
      const startAmount = 10.96;
      const endAmount = 300.02;
      const increment = Number(((endAmount - startAmount) / 20).toFixed(2));

      const animateAmount = () => {
        if (amount < endAmount) {
          setAmount((prevAmount) => {
            return Number((prevAmount + increment).toFixed(2)) > endAmount
              ? endAmount
              : prevAmount + increment;
          });
        } else {
          clearInterval(intervalId);
          setIsAnimating(false);
        }
      };

      intervalId = setInterval(animateAmount, 50);
    }

    return () => clearInterval(intervalId);
  }, [amount, isAnimating]);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  return (
    <div>
      <div>￥{amount}</div>
      <Button onClick={startAnimation}>触发动画</Button>
    </div>
  );
};

export default DigitalAnimation;
