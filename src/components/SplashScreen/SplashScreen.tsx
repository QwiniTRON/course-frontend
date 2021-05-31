import React from 'react';
import { SplashLoader, Title, Container } from './styled';

import './SplashScreen.scss';

type SplashScreenProps = {}

export const SplashScreen: React.FC<SplashScreenProps> = (props) => {
  return (
    <Container>
      <SplashLoader>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplashLoader>

      <Title>Идёт загрузка</Title>
    </Container>
  );
};