import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { decrement, decrementByAmount, increment, incrementByAmount } from '../slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch(); 

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleValueIncrementClick(){
    dispatch(incrementByAmount(5));
  }
  function handleValueDecrementClick(){
    dispatch(decrementByAmount(5));
  }

  return (
    <div className='counter'>
        <button onClick={handleIncrementClick}> + </button>
      
      <button onClick={handleValueIncrementClick}> +5 </button>
      <h1>COunt: {count}</h1>
      <button onClick={handleDecrementClick}> - </button>
      <button onClick={handleValueDecrementClick}> -5 </button>
    </div>
  )
}

export default Counter