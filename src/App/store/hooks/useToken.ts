import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserStorage } from '../storages';
import { RootState } from '../StoreProvider';


export function useToken() {
  const token = useSelector((state: RootState) => state.user.authentication);

  return token;
}