/**
 * @license NgRx 6.1.0+48.sha-49dcf7f
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@ngrx/store'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngrx/router-store', ['exports', '@angular/core', '@angular/router', '@ngrx/store', 'rxjs/operators'], factory) :
    (factory((global.ngrx = global.ngrx || {}, global.ngrx.routerStore = {}),global.ng.core,global.ng.router,global['@ngrx/store'],global.rxjs.operators));
}(this, (function (exports,core,router,store,operators) { 'use strict';

    /**
     * An action dispatched when a router navigation request is fired.
     */
    var ROUTER_REQUEST = '@ngrx/router-store/request';
    /**
     * An action dispatched when the router navigates.
     */
    var ROUTER_NAVIGATION = '@ngrx/router-store/navigation';
    /**
     * An action dispatched when the router cancels navigation.
     */
    var ROUTER_CANCEL = '@ngrx/router-store/cancel';
    /**
     * An action dispatched when the router errors.
     */
    var ROUTER_ERROR = '@ngrx/router-store/error';
    /**
     * An action dispatched after navigation has ended and new route is active.
     */
    var ROUTER_NAVIGATED = '@ngrx/router-store/navigated';

    function routerReducer(state, action) {
        switch (action.type) {
            case ROUTER_NAVIGATION:
            case ROUTER_ERROR:
            case ROUTER_CANCEL:
                return {
                    state: action.payload.routerState,
                    navigationId: action.payload.event.id,
                };
            default:
                return state;
        }
    }

    var RouterStateSerializer = /** @class */ (function () {
        function RouterStateSerializer() {
        }
        return RouterStateSerializer;
    }());
    var DefaultRouterStateSerializer = /** @class */ (function () {
        function DefaultRouterStateSerializer() {
        }
        DefaultRouterStateSerializer.prototype.serialize = function (routerState) {
            return {
                root: this.serializeRoute(routerState.root),
                url: routerState.url,
            };
        };
        DefaultRouterStateSerializer.prototype.serializeRoute = function (route) {
            var _this = this;
            var children = route.children.map(function (c) { return _this.serializeRoute(c); });
            return {
                params: route.params,
                paramMap: route.paramMap,
                data: route.data,
                url: route.url,
                outlet: route.outlet,
                routeConfig: {
                    component: route.routeConfig ? route.routeConfig.component : undefined,
                },
                queryParams: route.queryParams,
                queryParamMap: route.queryParamMap,
                fragment: route.fragment,
                component: (route.routeConfig
                    ? route.routeConfig.component
                    : undefined),
                root: undefined,
                parent: undefined,
                firstChild: children[0],
                pathFromRoot: undefined,
                children: children,
            };
        };
        return DefaultRouterStateSerializer;
    }());

    var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    (function (NavigationActionTiming) {
        NavigationActionTiming[NavigationActionTiming["PreActivation"] = 1] = "PreActivation";
        NavigationActionTiming[NavigationActionTiming["PostActivation"] = 2] = "PostActivation";
    })(exports.NavigationActionTiming || (exports.NavigationActionTiming = {}));
    var _ROUTER_CONFIG = new core.InjectionToken('@ngrx/router-store Internal Configuration');
    var ROUTER_CONFIG = new core.InjectionToken('@ngrx/router-store Configuration');
    var DEFAULT_ROUTER_FEATURENAME = 'router';
    function _createRouterConfig(config) {
        return __assign({ stateKey: DEFAULT_ROUTER_FEATURENAME, serializer: DefaultRouterStateSerializer, navigationActionTiming: exports.NavigationActionTiming.PreActivation }, config);
    }
    var RouterTrigger;
    (function (RouterTrigger) {
        RouterTrigger[RouterTrigger["NONE"] = 1] = "NONE";
        RouterTrigger[RouterTrigger["ROUTER"] = 2] = "ROUTER";
        RouterTrigger[RouterTrigger["STORE"] = 3] = "STORE";
    })(RouterTrigger || (RouterTrigger = {}));
    var ɵ0 = {};
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
    var StoreRouterConnectingModule = /** @class */ (function () {
        function StoreRouterConnectingModule(store$$1, router$$1, serializer, errorHandler, config) {
            this.store = store$$1;
            this.router = router$$1;
            this.serializer = serializer;
            this.errorHandler = errorHandler;
            this.config = config;
            this.trigger = RouterTrigger.NONE;
            this.stateKey = this.config.stateKey;
            this.setUpStoreStateListener();
            this.setUpRouterEventsListener();
        }
        StoreRouterConnectingModule.forRoot = function (config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: StoreRouterConnectingModule,
                providers: [
                    { provide: _ROUTER_CONFIG, useValue: config },
                    {
                        provide: RouterStateSerializer,
                        useClass: config.serializer
                            ? config.serializer
                            : DefaultRouterStateSerializer,
                    },
                ],
            };
        };
        StoreRouterConnectingModule.prototype.setUpStoreStateListener = function () {
            var _this = this;
            this.store
                .pipe(store.select(this.stateKey), operators.withLatestFrom(this.store))
                .subscribe(function (_a) {
                var _b = __read(_a, 2), routerStoreState = _b[0], storeState = _b[1];
                _this.navigateIfNeeded(routerStoreState, storeState);
            });
        };
        StoreRouterConnectingModule.prototype.navigateIfNeeded = function (routerStoreState, storeState) {
            var _this = this;
            if (!routerStoreState || !routerStoreState.state) {
                return;
            }
            if (this.trigger === RouterTrigger.ROUTER) {
                return;
            }
            var url = routerStoreState.state.url;
            if (this.router.url !== url) {
                this.storeState = storeState;
                this.trigger = RouterTrigger.STORE;
                this.router.navigateByUrl(url).catch(function (error) {
                    _this.errorHandler.handleError(error);
                });
            }
        };
        StoreRouterConnectingModule.prototype.setUpRouterEventsListener = function () {
            var _this = this;
            var dispatchNavLate = this.config.navigationActionTiming ===
                exports.NavigationActionTiming.PostActivation;
            var routesRecognized;
            this.router.events
                .pipe(operators.withLatestFrom(this.store))
                .subscribe(function (_a) {
                var _b = __read(_a, 2), event = _b[0], storeState = _b[1];
                if (event instanceof router.NavigationStart) {
                    _this.routerState = _this.serializer.serialize(_this.router.routerState.snapshot);
                    if (_this.trigger !== RouterTrigger.STORE) {
                        _this.storeState = storeState;
                        _this.dispatchRouterRequest(event);
                    }
                }
                else if (event instanceof router.RoutesRecognized) {
                    routesRecognized = event;
                    if (!dispatchNavLate && _this.trigger !== RouterTrigger.STORE) {
                        _this.dispatchRouterNavigation(event);
                    }
                }
                else if (event instanceof router.NavigationCancel) {
                    _this.dispatchRouterCancel(event);
                    _this.reset();
                }
                else if (event instanceof router.NavigationError) {
                    _this.dispatchRouterError(event);
                    _this.reset();
                }
                else if (event instanceof router.NavigationEnd) {
                    if (_this.trigger !== RouterTrigger.STORE) {
                        if (dispatchNavLate) {
                            _this.dispatchRouterNavigation(routesRecognized);
                        }
                        _this.dispatchRouterNavigated(event);
                    }
                    _this.reset();
                }
            });
        };
        StoreRouterConnectingModule.prototype.dispatchRouterRequest = function (event) {
            this.dispatchRouterAction(ROUTER_REQUEST, { event: event });
        };
        StoreRouterConnectingModule.prototype.dispatchRouterNavigation = function (lastRoutesRecognized) {
            var nextRouterState = this.serializer.serialize(lastRoutesRecognized.state);
            this.dispatchRouterAction(ROUTER_NAVIGATION, {
                routerState: nextRouterState,
                event: new router.RoutesRecognized(lastRoutesRecognized.id, lastRoutesRecognized.url, lastRoutesRecognized.urlAfterRedirects, nextRouterState),
            });
        };
        StoreRouterConnectingModule.prototype.dispatchRouterCancel = function (event) {
            this.dispatchRouterAction(ROUTER_CANCEL, {
                routerState: this.routerState,
                storeState: this.storeState,
                event: event,
            });
        };
        StoreRouterConnectingModule.prototype.dispatchRouterError = function (event) {
            this.dispatchRouterAction(ROUTER_ERROR, {
                routerState: this.routerState,
                storeState: this.storeState,
                event: new router.NavigationError(event.id, event.url, "" + event),
            });
        };
        StoreRouterConnectingModule.prototype.dispatchRouterNavigated = function (event) {
            this.dispatchRouterAction(ROUTER_NAVIGATED, { event: event });
        };
        StoreRouterConnectingModule.prototype.dispatchRouterAction = function (type, payload) {
            this.trigger = RouterTrigger.ROUTER;
            try {
                this.store.dispatch({ type: type, payload: payload });
            }
            finally {
                this.trigger = RouterTrigger.NONE;
            }
        };
        StoreRouterConnectingModule.prototype.reset = function () {
            this.trigger = RouterTrigger.NONE;
            this.storeState = null;
            this.routerState = null;
        };
        StoreRouterConnectingModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            {
                                provide: _ROUTER_CONFIG,
                                useValue: ɵ0,
                            },
                            {
                                provide: ROUTER_CONFIG,
                                useFactory: _createRouterConfig,
                                deps: [_ROUTER_CONFIG],
                            },
                            {
                                provide: RouterStateSerializer,
                                useClass: DefaultRouterStateSerializer,
                            },
                        ],
                    },] }
        ];
        /** @nocollapse */
        StoreRouterConnectingModule.ctorParameters = function () { return [
            { type: store.Store },
            { type: router.Router },
            { type: RouterStateSerializer },
            { type: core.ErrorHandler },
            { type: undefined, decorators: [{ type: core.Inject, args: [ROUTER_CONFIG,] }] }
        ]; };
        return StoreRouterConnectingModule;
    }());

    /**
     * DO NOT EDIT
     *
     * This file is automatically generated at build
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ɵngrx_modules_router_store_router_store_a = _ROUTER_CONFIG;
    exports.ɵngrx_modules_router_store_router_store_b = _createRouterConfig;
    exports.ROUTER_ERROR = ROUTER_ERROR;
    exports.ROUTER_CANCEL = ROUTER_CANCEL;
    exports.ROUTER_NAVIGATION = ROUTER_NAVIGATION;
    exports.ROUTER_NAVIGATED = ROUTER_NAVIGATED;
    exports.ROUTER_REQUEST = ROUTER_REQUEST;
    exports.routerReducer = routerReducer;
    exports.StoreRouterConnectingModule = StoreRouterConnectingModule;
    exports.ROUTER_CONFIG = ROUTER_CONFIG;
    exports.DEFAULT_ROUTER_FEATURENAME = DEFAULT_ROUTER_FEATURENAME;
    exports.RouterStateSerializer = RouterStateSerializer;
    exports.DefaultRouterStateSerializer = DefaultRouterStateSerializer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=router-store.umd.js.map
