/**
 * An action dispatched when a router navigation request is fired.
 */
export var ROUTER_REQUEST = '@ngrx/router-store/request';
/**
 * An action dispatched when the router navigates.
 */
export var ROUTER_NAVIGATION = '@ngrx/router-store/navigation';
/**
 * An action dispatched when the router cancels navigation.
 */
export var ROUTER_CANCEL = '@ngrx/router-store/cancel';
/**
 * An action dispatched when the router errors.
 */
export var ROUTER_ERROR = '@ngrx/router-store/error';
/**
 * An action dispatched after navigation has ended and new route is active.
 */
export var ROUTER_NAVIGATED = '@ngrx/router-store/navigated';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvcm91dGVyLXN0b3JlL3NyYy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sY0FBYyxHQUFHLDRCQUE0QixDQUFDO0FBaUIzRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLCtCQUErQixDQUFDO0FBb0JqRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRywyQkFBMkIsQ0FBQztBQXNCekQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsMEJBQTBCLENBQUM7QUFzQnZEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOYXZpZ2F0aW9uQ2FuY2VsLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uRXJyb3IsXG4gIE5hdmlnYXRpb25TdGFydCxcbiAgUm91dGVzUmVjb2duaXplZCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgQmFzZVJvdXRlclN0b3JlU3RhdGUsXG4gIFNlcmlhbGl6ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxufSBmcm9tICcuL3NlcmlhbGl6ZXInO1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gYSByb3V0ZXIgbmF2aWdhdGlvbiByZXF1ZXN0IGlzIGZpcmVkLlxuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX1JFUVVFU1QgPSAnQG5ncngvcm91dGVyLXN0b3JlL3JlcXVlc3QnO1xuXG4vKipcbiAqIFBheWxvYWQgb2YgUk9VVEVSX1JFUVVFU1RcbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyUmVxdWVzdFBheWxvYWQgPSB7XG4gIGV2ZW50OiBOYXZpZ2F0aW9uU3RhcnQ7XG59O1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gYSByb3V0ZXIgbmF2aWdhdGlvbiByZXF1ZXN0IGlzIGZpcmVkLlxuICovXG5leHBvcnQgdHlwZSBSb3V0ZXJSZXF1ZXN0QWN0aW9uID0ge1xuICB0eXBlOiB0eXBlb2YgUk9VVEVSX1JFUVVFU1Q7XG4gIHBheWxvYWQ6IFJvdXRlclJlcXVlc3RQYXlsb2FkO1xufTtcblxuLyoqXG4gKiBBbiBhY3Rpb24gZGlzcGF0Y2hlZCB3aGVuIHRoZSByb3V0ZXIgbmF2aWdhdGVzLlxuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX05BVklHQVRJT04gPSAnQG5ncngvcm91dGVyLXN0b3JlL25hdmlnYXRpb24nO1xuXG4vKipcbiAqIFBheWxvYWQgb2YgUk9VVEVSX05BVklHQVRJT04uXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlck5hdmlnYXRpb25QYXlsb2FkPFQgZXh0ZW5kcyBCYXNlUm91dGVyU3RvcmVTdGF0ZT4gPSB7XG4gIHJvdXRlclN0YXRlOiBUO1xuICBldmVudDogUm91dGVzUmVjb2duaXplZDtcbn07XG5cbi8qKlxuICogQW4gYWN0aW9uIGRpc3BhdGNoZWQgd2hlbiB0aGUgcm91dGVyIG5hdmlnYXRlcy5cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyTmF2aWdhdGlvbkFjdGlvbjxcbiAgVCBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHR5cGU6IHR5cGVvZiBST1VURVJfTkFWSUdBVElPTjtcbiAgcGF5bG9hZDogUm91dGVyTmF2aWdhdGlvblBheWxvYWQ8VD47XG59O1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIHJvdXRlciBjYW5jZWxzIG5hdmlnYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfQ0FOQ0VMID0gJ0BuZ3J4L3JvdXRlci1zdG9yZS9jYW5jZWwnO1xuXG4vKipcbiAqIFBheWxvYWQgb2YgUk9VVEVSX0NBTkNFTC5cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyQ2FuY2VsUGF5bG9hZDxULCBWIGV4dGVuZHMgQmFzZVJvdXRlclN0b3JlU3RhdGU+ID0ge1xuICByb3V0ZXJTdGF0ZTogVjtcbiAgc3RvcmVTdGF0ZTogVDtcbiAgZXZlbnQ6IE5hdmlnYXRpb25DYW5jZWw7XG59O1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIHJvdXRlciBjYW5jZWwgbmF2aWdhdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyQ2FuY2VsQWN0aW9uPFxuICBULFxuICBWIGV4dGVuZHMgQmFzZVJvdXRlclN0b3JlU3RhdGUgPSBTZXJpYWxpemVkUm91dGVyU3RhdGVTbmFwc2hvdFxuPiA9IHtcbiAgdHlwZTogdHlwZW9mIFJPVVRFUl9DQU5DRUw7XG4gIHBheWxvYWQ6IFJvdXRlckNhbmNlbFBheWxvYWQ8VCwgVj47XG59O1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIHJvdXRlciBlcnJvcnMuXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfRVJST1IgPSAnQG5ncngvcm91dGVyLXN0b3JlL2Vycm9yJztcblxuLyoqXG4gKiBQYXlsb2FkIG9mIFJPVVRFUl9FUlJPUi5cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyRXJyb3JQYXlsb2FkPFQsIFYgZXh0ZW5kcyBCYXNlUm91dGVyU3RvcmVTdGF0ZT4gPSB7XG4gIHJvdXRlclN0YXRlOiBWO1xuICBzdG9yZVN0YXRlOiBUO1xuICBldmVudDogTmF2aWdhdGlvbkVycm9yO1xufTtcblxuLyoqXG4gKiBBbiBhY3Rpb24gZGlzcGF0Y2hlZCB3aGVuIHRoZSByb3V0ZXIgZXJyb3JzLlxuICovXG5leHBvcnQgdHlwZSBSb3V0ZXJFcnJvckFjdGlvbjxcbiAgVCxcbiAgViBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHR5cGU6IHR5cGVvZiBST1VURVJfRVJST1I7XG4gIHBheWxvYWQ6IFJvdXRlckVycm9yUGF5bG9hZDxULCBWPjtcbn07XG5cbi8qKlxuICogQW4gYWN0aW9uIGRpc3BhdGNoZWQgYWZ0ZXIgbmF2aWdhdGlvbiBoYXMgZW5kZWQgYW5kIG5ldyByb3V0ZSBpcyBhY3RpdmUuXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfTkFWSUdBVEVEID0gJ0BuZ3J4L3JvdXRlci1zdG9yZS9uYXZpZ2F0ZWQnO1xuXG4vKipcbiAqIFBheWxvYWQgb2YgUk9VVEVSX05BVklHQVRFRC5cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyTmF2aWdhdGVkUGF5bG9hZCA9IHtcbiAgZXZlbnQ6IE5hdmlnYXRpb25FbmQ7XG59O1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIGFmdGVyIG5hdmlnYXRpb24gaGFzIGVuZGVkIGFuZCBuZXcgcm91dGUgaXMgYWN0aXZlLlxuICovXG5leHBvcnQgdHlwZSBSb3V0ZXJOYXZpZ2F0ZWRBY3Rpb24gPSB7XG4gIHR5cGU6IHR5cGVvZiBST1VURVJfTkFWSUdBVEVEO1xuICBwYXlsb2FkOiBSb3V0ZXJOYXZpZ2F0ZWRQYXlsb2FkO1xufTtcblxuLyoqXG4gKiBBbiB1bmlvbiB0eXBlIG9mIHJvdXRlciBhY3Rpb25zLlxuICovXG5leHBvcnQgdHlwZSBSb3V0ZXJBY3Rpb248XG4gIFQsXG4gIFYgZXh0ZW5kcyBCYXNlUm91dGVyU3RvcmVTdGF0ZSA9IFNlcmlhbGl6ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90XG4+ID1cbiAgfCBSb3V0ZXJSZXF1ZXN0QWN0aW9uXG4gIHwgUm91dGVyTmF2aWdhdGlvbkFjdGlvbjxWPlxuICB8IFJvdXRlckNhbmNlbEFjdGlvbjxULCBWPlxuICB8IFJvdXRlckVycm9yQWN0aW9uPFQsIFY+XG4gIHwgUm91dGVyTmF2aWdhdGVkQWN0aW9uO1xuIl19