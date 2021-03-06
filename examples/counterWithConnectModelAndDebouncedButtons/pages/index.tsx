import {combineModelReducers, connectModel, Model, modelRootSaga,} from 'redux-data-model';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, combineReducers, createStore,} from 'redux';
import logger from 'redux-logger';
import {Provider, useSelector,} from 'react-redux';
import * as React from 'react';
import JSONTree from 'react-json-tree';

type CounterState = {
  count: number;
};

type CounterSelectorPayloads = {
  count: null;
};

type CounterReducerPayloads = {
  increment: null;
  decrement: null;
};

type CounterEffectPayloads = {
  tryToIncrement: null;
  tryToDecrement: null;
};

export const counterModel = new Model<
CounterState, CounterSelectorPayloads, CounterReducerPayloads, CounterEffectPayloads
>({
  namespace: "counter",
  state: {
    count: 0
  },
  selectors: {
    count: state => state.count
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    }
  },
  effects: {
    *tryToIncrement(_payload, sagaEffects, {increment}) {
      // Let's pretend something asynchronous need to be performed here
      yield sagaEffects.delay(100);
      yield sagaEffects.put(increment());
    },
    *tryToDecrement(_payload, sagaEffects, {decrement}) {
      // Let's pretend something asynchronous need to be performed here
      yield sagaEffects.delay(100);
      yield sagaEffects.put(decrement());
    },
  },
  blockingEffects: {
    *tryToIncrement(actionType, {debounce}, {tryToIncrement}) {
      yield debounce(3000, actionType, tryToIncrement);
    },
    *tryToDecrement(actionType, {debounce}, {tryToDecrement}) {
      yield debounce(3000, actionType, tryToDecrement);
    },
  }
});

const sagaMiddleware = createSagaMiddleware();
const middlewares: any[] = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const store = createStore(combineReducers({
  ...combineModelReducers([counterModel]),
}), applyMiddleware(...middlewares));

sagaMiddleware.run(() => modelRootSaga([counterModel]));

function TestComponent({ count, tryToIncrement, tryToDecrement }: {
  count: number;
  tryToIncrement: () => Promise<any>;
  tryToDecrement: () => Promise<any>;
}) {
  // Only used for displaying entire state
  const allState = useSelector(state => state);

  return (
    <>
      <div>
        <strong>Count:</strong> <span id="counterValue">{count}</span>
      </div>
      <div>
        <button
          id="incrementButton"
          onClick={tryToIncrement}>
          Debounced increment by 3 seconds
        </button> |{" "}
        <button
          id="decrementButton"
          onClick={tryToDecrement}>
          Debounced decrement by 3 seconds
        </button>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <strong>
          State (Open console to see actions as they are triggered):
        </strong>
        <JSONTree data={allState} />
      </div>
    </>
  );
}

function mapStateToProps(state: any, _props: any, selectors: any) {
  return {
    count: selectors.counter.count(state)
  };
}

function mapDispatchToProps(_dispatch: any, _props: any, dispatchers: any) {
  return {
    tryToIncrement: () => dispatchers.counter.tryToIncrement(),
    tryToDecrement: () => dispatchers.counter.tryToDecrement(),
  };
}

const WrappedTestComponent = connectModel([counterModel], mapStateToProps, mapDispatchToProps)(
  TestComponent
);

export default () => {
  return (
    <Provider store={store}>
      <WrappedTestComponent />
    </Provider>
  );
};
