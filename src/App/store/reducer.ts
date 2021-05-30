export function makeReducer<TStorage, TAction extends {type: any}>(handlers: {[p: string]: any}, initialStore: TStorage) {
  return function (state: TStorage = initialStore, action: TAction): TStorage {
    const currentHandler = handlers[action.type];
    return currentHandler ? currentHandler.call(null, state, action) : state;
  }
}