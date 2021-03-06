import { InjectionToken, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RouterStateSerializer, SerializedRouterStateSnapshot } from './serializer';
export interface StoreRouterConfig {
    stateKey?: string;
    serializer?: new (...args: any[]) => RouterStateSerializer;
    /**
     * By default, ROUTER_NAVIGATION is dispatched before guards and resolvers run.
     * Therefore, the action could run too soon, for example
     * there may be a navigation cancel due to a guard saying the navigation is not allowed.
     * To run ROUTER_NAVIGATION after guards and resolvers,
     * set this property to NavigationActionTiming.PostActivation.
     */
    navigationActionTiming?: NavigationActionTiming;
}
export declare enum NavigationActionTiming {
    PreActivation = 1,
    PostActivation = 2,
}
export declare const _ROUTER_CONFIG: InjectionToken<{}>;
export declare const ROUTER_CONFIG: InjectionToken<{}>;
export declare const DEFAULT_ROUTER_FEATURENAME = "router";
export declare function _createRouterConfig(config: StoreRouterConfig): StoreRouterConfig;
/**
 * Connects RouterModule with StoreModule.
 *
 * During the navigation, before any guards or resolvers run, the router will dispatch
 * a ROUTER_NAVIGATION action, which has the following signature:
 *
 * ```
 * export type RouterNavigationPayload = {
 *   routerState: SerializedRouterStateSnapshot,
 *   event: RoutesRecognized
 * }
 * ```
 *
 * Either a reducer or an effect can be invoked in response to this action.
 * If the invoked reducer throws, the navigation will be canceled.
 *
 * If navigation gets canceled because of a guard, a ROUTER_CANCEL action will be
 * dispatched. If navigation results in an error, a ROUTER_ERROR action will be dispatched.
 *
 * Both ROUTER_CANCEL and ROUTER_ERROR contain the store state before the navigation
 * which can be used to restore the consistency of the store.
 *
 * Usage:
 *
 * ```typescript
 * @NgModule({
 *   declarations: [AppCmp, SimpleCmp],
 *   imports: [
 *     BrowserModule,
 *     StoreModule.forRoot(mapOfReducers),
 *     RouterModule.forRoot([
 *       { path: '', component: SimpleCmp },
 *       { path: 'next', component: SimpleCmp }
 *     ]),
 *     StoreRouterConnectingModule
 *   ],
 *   bootstrap: [AppCmp]
 * })
 * export class AppModule {
 * }
 * ```
 */
export declare class StoreRouterConnectingModule {
    private store;
    private router;
    private serializer;
    private errorHandler;
    private config;
    static forRoot(config?: StoreRouterConfig): ModuleWithProviders;
    private routerState;
    private storeState;
    private trigger;
    private stateKey;
    constructor(store: Store<any>, router: Router, serializer: RouterStateSerializer<SerializedRouterStateSnapshot>, errorHandler: ErrorHandler, config: StoreRouterConfig);
    private setUpStoreStateListener();
    private navigateIfNeeded(routerStoreState, storeState);
    private setUpRouterEventsListener();
    private dispatchRouterRequest(event);
    private dispatchRouterNavigation(lastRoutesRecognized);
    private dispatchRouterCancel(event);
    private dispatchRouterError(event);
    private dispatchRouterNavigated(event);
    private dispatchRouterAction(type, payload);
    private reset();
}
