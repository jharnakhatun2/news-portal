import { thunk } from "redux-thunk";
import rootReducer from "../redux/rootReducer";
import logger from "redux-logger";

const middleware = [thunk];
if(process.env.NODE_ENV = 'development'){
    middleware.push(logger);
}

const store = createStore(rootReducer)
export default store;