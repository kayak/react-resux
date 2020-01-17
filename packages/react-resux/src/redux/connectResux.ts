import {connect} from 'react-redux';
import {MapDispatchToPropsWithActionCreators, MapStateToPropsWithSelectors,} from '../baseTypes';
import {Model} from '../model';
import {connectResuxImpl} from './connectResuxImpl';

/**
 * Equivalent to redux's connect function. This should be used when the hooks api is not desired or
 * supported. Otherwise check [[useModelActions]] and [[useModelSelector]] up.
 *
 * @example
 * const ConnectedComponent = connectResux([modelA, modelB], mapStateToProps, mapDispatchToProps)
 *
 * @param models An array of Model instances.
 * @param userProvidedMapStateToProps A mapToProps equivalent, which has a third argument with all selectors.
 * @param userProvidedMapDispatchToProps A mapDispatchToProps equivalent, which has a third argument with all
 *                                       models' action creators.
 * @returns A connect HOC.
 * @category High Order Component (HOC)
 */
export function connectResux(
  models: Model[],
  userProvidedMapStateToProps: MapStateToPropsWithSelectors<any, any, any>=null,
  userProvidedMapDispatchToProps: MapDispatchToPropsWithActionCreators<any, any>=null,
) {
  return connect(
    ...connectResuxImpl(
      models, userProvidedMapStateToProps, userProvidedMapDispatchToProps,
    )
  );
}
