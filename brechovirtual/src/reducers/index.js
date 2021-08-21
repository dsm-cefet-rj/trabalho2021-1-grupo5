import { combineReducers} from "redux"
import bookingReducer from "./bookingReducer"
import productReducer from "./productReducer"

const rootReducer = combineReducers({
    booking:bookingReducer,
    product:productReducer,
})
export default rootReducer;