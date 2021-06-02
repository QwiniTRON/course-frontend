import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { INIT as INIT_User } from './store';

export const Init = () => {
  const [isInit, setIsInit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    void async function () {
      await dispatch(INIT_User());

      setIsInit(true);

      console.log("%c Reacter", "font-size: 36px;font-family: 'Courier New', Courier, monospace;font-weight: bold;color: #4d7cff;background-color: #fff;padding: 5px 20px;");
      console.log("%c Учим react вместе", "font-size: 18px;font-family: 'Courier New', Courier, monospace;font-weight: bold;color: #fff;background-color: #4d7cff;padding: 5px 20px;");
    }();
  }, []);

  return isInit;
}