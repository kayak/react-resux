import * as React from 'react';
import {useSelector} from 'react-redux';
import {Model, UndefinedSelectorError, wrapProxy, SelectorFunction} from 'redux-data-model';

/**
 * A react hook for returning data from the provided model's state, by the means of one of its selectors. If you
 * don't want/need to use the hooks api, check [[connectModel]] up.
 *
 * @example
 * const someDataFromState = useModelSelector(model, (state, selectors) => selectors.count(state));
 *
 * @param model A model instance.
 * @param selectorFunc A selector func, which will call one of the selectors in the provided model. The first
 *                     argument must be the entire redux state, followed by the selectors map of the model.
 * @returns Data from model's state.
 * @throws [[ModelNotReduxInitializedError]] When model was not initialized on a [[combineModelReducers]] call.
 * @category React Hook
 */
export function useModelSelector(model: Model, selectorFunc: SelectorFunction): any {
  const selectors = React.useMemo(() => {
    const modelSelectors = model.modelSelectors();
    return Model.disableProxyChecks ? modelSelectors : wrapProxy(modelSelectors, model, UndefinedSelectorError)
  }, [model, Model.disableProxyChecks]);
  return useSelector(
    (state: Record<string, any>) => selectorFunc(state, selectors),
  );
}