import  {createSlice} from "@reduxjs/toolkit"
const products=localStorage.products != null ? JSON.parse(localStorage.products) :[]

export const counterSlice=createSlice(
    {
        name:"counter",
        initialState:{
            count:products.length
        },
        reducers:{
            increment:(state,Action)=>{
                state.count +=1
            },
            decrement:(state,Action)=>{
                if(state.count !==0)
                 state.count -=1
            }
        }

    })//end counter slice
    export const {increment ,decrement}=counterSlice.actions

    export default counterSlice.reducer