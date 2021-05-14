import {
  any,
  some
} from './consts';

// User
export type SomeAction = {
  type: typeof some,
  some: string
}
export type AnyAction = {
  type: typeof any,
  any: string
}

export type UserAction = SomeAction | AnyAction;