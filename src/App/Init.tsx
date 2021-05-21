import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { INIT as INIT_User } from './store';

export const Init = () => {
  const [isInit, setIsInit] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    void async function(){
      await dispatch(INIT_User());

      setIsInit(true);
    }();
  });

  return isInit;
}