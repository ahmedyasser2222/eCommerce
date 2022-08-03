import { configureStore} from "@reduxjs/toolkit"
import counterSlice from "./slice/counter"
const Store=configureStore(
{        reducer:{
            counter:counterSlice
        }
    }
)
export default Store