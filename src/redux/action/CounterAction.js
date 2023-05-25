import { ADD, CLEAR, SUB, SWEET } from "../contanst"



export const add=(data)=>{
    console.warn("action called",Number(data)); 
  return{
    type:ADD,
    payload:Number(data)
  }
}
export const sub=(data)=>{
    console.warn("action called",data); 
  return{
    type:SUB,
    payload:Number(data)
  }
}
export const sweet=(data)=>{
    return{
        type:SWEET,
        data
    }
}
export const clear=(data)=>{
    return{
        type:CLEAR,
        data
    }
}