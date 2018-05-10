import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reduces';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, reduxImmutableStateInvariant()),
            window.devToolsExtension ? window.devToolsExtension() : f => f // Setup store to be aware by redux dev Tools in chrome
        )
    );
}
