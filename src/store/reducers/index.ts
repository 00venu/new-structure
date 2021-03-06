import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import list from './list';
const rootReducer = combineReducers({
list
});
const persistConfig = {
key: "localPersist",
storage,
whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof persistReducer>;
export default persistedReducer;