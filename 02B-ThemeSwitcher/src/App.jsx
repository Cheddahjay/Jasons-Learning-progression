//Theme switcher 
//useTheme which manages light and dark mode
//Container component that uses children to manage background color based on them
//Toggle button to switch themes
//Content inside of the container

import {useState} from 'react'


function useTheme(){
  const [toggle,setToggle] = useState(false)
  const change = () => setToggle(!toggle)
  return {toggle, change}
}


function Button({children, onClick}){


  return(
    <div>
      <button onClick={onClick} style={{border:'2px solid black', backgroundColor:'lightblue', padding: '10px' }}>
        {children}
      </button>
    </div>
  )
}

function Container({toggle, change, children}){

  let backgroundColor = 'white'
  if(toggle){
    backgroundColor = 'black'
  }


  return(
    <div style={{backgroundColor: backgroundColor, padding: '10px'}}>
      <div>
       <h1 style={{color: 'blue'}}>Change your color theme!</h1>
       <Button toggle={toggle} onClick={change}>
        Change{children}
       </Button>
      </div>
    </div>
  )
}


function App(){
  const {toggle, change} = useTheme(false)
  

  return(
    <div>
    <Container toggle={toggle} change={change}/>
    </div>
  )
}
export default App