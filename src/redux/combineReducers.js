import { combineReducers } from "redux";
import { reducer, wishlistReducer , basketReducer} from "./reducer";

const rootReducer = combineReducers({
  login: reducer,
  like: wishlistReducer,
  book: basketReducer
})

export default rootReducer