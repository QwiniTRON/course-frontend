import React from 'react';
import { useSelector } from 'react-redux';
import { User, UserAuthView } from '../../../models';
import { UserStorage } from '../storages';
import { RootState } from '../StoreProvider';

export const useUserData = function (): UserAuthView {
  const userStore = useSelector<RootState, UserStorage>(state => state.user);

  return {
    user: userStore.userData,
    authentication: userStore.authentication
  }
}
