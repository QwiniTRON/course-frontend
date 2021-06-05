import React from 'react';
import { CenterCard, AppCard } from '..';
import { EmptyLayout } from '../../layouts';
import reactLogo from '../../appstatic/react_logo.svg';
import { BounderImg } from './styled';
import { Box } from '@material-ui/core';

type AppBounderProps = {}

export class AppBounder extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <EmptyLayout>
          <CenterCard>
            <AppCard>
              <Box fontSize={18} padding={2}>
                <BounderImg src={reactLogo} alt="react love logo" />
                <p>Произошла серьёзная ошибка приложения :(</p>
                <br />
                <p>Пожалуйста зайдите позже</p>
              </Box>
            </AppCard>
          </CenterCard>
        </EmptyLayout>
      );
    }

    return this.props.children;
  }
}