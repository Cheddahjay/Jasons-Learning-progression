import {useState} from 'react'

function useCounter(initialValue){
  const [count, setCount] = useState(initialValue)
  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)
  const reset = () => setCount(0)

  return {count, increase, decrease, reset}
}


function Button({children, type, onClick}){

  let backgroundColor = 'lightblue'

  if(type === 'increase'){
    backgroundColor = 'green'
  }
  else if(type === 'decrease'){
    backgroundColor = 'red'
  }
  else if (type === 'Reset'){
    backgroundColor = 'lightblue'

  }

  return(
    <div>
      <button onClick={onClick} style={{border: '2px solid black', padding: '5px', backgroundColor: backgroundColor}}>
        {children} 
      </button>
    </div>
  )
}

function App(){

  const{count, increase, decrease, reset} = useCounter(0)
   
  return(
    <div>
      <h1>{count}</h1>
      <Button onClick={increase} type='increase'>
        Increase
      </Button>

      <Button onClick={decrease} type='decrease'>
        Decrease
      </Button>

      <Button onClick={reset} type='reset'>
        Reset
      </Button>

    </div>
  )
}
export default App