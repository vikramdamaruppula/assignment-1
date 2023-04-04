import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement ,changeInput,changeContent} from '../redux/counterSlice'
const Counter = () => {
    const dispatch =useDispatch()
    const count = useSelector((state)=>state.counter.value)
    const display = useSelector((state)=>state.counter.name)
    const show = useSelector((state)=>state.counter.show)
  return (
    <div className='container pt-3'>
        <input type="text" className='form-control w-50 pb-2' placeholder='write and click to show content !!!!!' onChange={(e)=>dispatch(changeInput(e.target.value))}/>
        {show  ? <p className='text-success'> {display}  </p> : <p>   </p>}
        <button onClick={()=>dispatch(changeContent())} className="btn btn-dark mt-2">  display content </button>
        

        <button className="btn btn-warning mt-4 d-block" type='button' onClick={()=>dispatch(increment())}>  Increase </button>
            <p className='text-primary m-2'> {count} </p>
        <button className="btn btn-danger mt-2" type='button' onClick={()=>dispatch(decrement())}>  Decrease </button>
      
    </div>
  )
}

export default Counter
