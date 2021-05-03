import { combineReducers } from 'redux';
import entitiesReducer from "./entities";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['entities']
};

const rootReducer = combineReducers({
    entities: entitiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
