import { RouterAction } from './actions';
import { BaseRouterStoreState, SerializedRouterStateSnapshot } from './serializer';
export declare type RouterReducerState<T extends BaseRouterStoreState = SerializedRouterStateSnapshot> = {
    state: T;
    navigationId: number;
};
export declare function routerReducer<T extends BaseRouterStoreState = SerializedRouterStateSnapshot>(state: RouterReducerState<T> | undefined, action: RouterAction<any, T>): RouterReducerState<T>;
