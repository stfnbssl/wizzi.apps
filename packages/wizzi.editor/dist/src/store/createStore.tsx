/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\store\createStore.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {StoreState} from './types';
import {createRootReducer} from './reducers';
import {createRootSaga} from './sagas';

export default function createStoreWithPreloadedState(preloadedState: StoreState) {
    
        let composeEnhancer: typeof compose;
        if (typeof window !== 'undefined') {
            composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        }
        else {
            composeEnhancer = compose;
        }
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(createRootReducer(), preloadedState, composeEnhancer(applyMiddleware(sagaMiddleware)));
        let sagaTask = sagaMiddleware.run(createRootSaga());
        
        // Hot reloading
        if (module.hot) {
            const newCreateRootReducer = require('./reducers');
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('./reducers', () => 
            
                store.replaceReducer(newCreateRootReducer())
            )
            // Enable Webpack hot module replacement for sagas
            module.hot.accept('./sagas', () => {
            
                const newCreateRootSaga = require('./sagas');
                // FIXME https://github.com/GuillaumeCisco/redux-sagas-injector/blob/master/src/redux-sagas-injector.js
                sagaTask.cancel();
                
                // FIXME https://github.com/GuillaumeCisco/redux-sagas-injector/blob/master/src/redux-sagas-injector.js
                sagaTask = sagaMiddleware.run(newCreateRootSaga());
            }
            )
        }
        return store;
    }
