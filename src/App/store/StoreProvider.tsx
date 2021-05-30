import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { appDataReducer, userReducer } from './storages';

const rootReducer = combineReducers({
  user: userReducer,
  data: appDataReducer
});

const composeEnhancers =
  typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) :
    compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof rootReducer>;


type StoreProviderProps = {}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};