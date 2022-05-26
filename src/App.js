import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NetFlux</h1>
      </header>
      <ButtonPanel />
    </div>
  );
}

const ButtonPanel = () => {
  const [like1, setLike1] = React.useState(0)
  const [like2, setLike2] = React.useState(0)
  const [like3, setLike3] = React.useState(0)
  const [like4, setLike4] = React.useState(1)
  const [like5, setLike5] = React.useState(0)
  const [like6, setLike6] = React.useState(0)

  const list = [like1, like2, like3, like4, like5, like6]

  const listMax = (value) => {
    return Math.max(...value)
  }

  const getMax = () => {

    if (listMax(list) === like1) {
      return (
      <div>
        <p>Game of Thrones</p>
        {panel({name: 'Like', value: 'first'})}
        <p>{like1}</p>
      </div>
      )
    }

    if (listMax(list) === like2) {
      return (
      <div>
        <p>Merlin</p>
        {panel({name: 'Like', value: 'second'})}
        <p>{like2}</p>
      </div>
      )
    }

    if (listMax(list) === like3) {
      return (
      <div>
        <p>Avengers</p>
        {panel({name: 'Like', value: 'third'})}
        <p>{like3}</p>
      </div>
      )
    }

    if (listMax(list) === like4) {
      return (
      <div>
        <p>The Return</p>
        {panel({name: 'Like', value: 'fourth'})}
        <p>{like4}</p>
      </div>
      )
    }

    if (listMax(list) === like5) {
      return (
      <div>
        <p>Boss Level</p>
        {panel({name: 'Like', value: 'fifth'})}
        <p>{like5}</p>
      </div>
      )
    }

    if (listMax(list) === like6) {
      return (
      <div>
        <p>Riddick</p>
        {panel({name: 'Like', value: 'sixth'})}
        <p>{like6}</p>
      </div>
      )
    }
  }

  const handleLike = (value) => {
    if (value === 'first') {
      setLike1(like1 + 1)
    }
    if (value === 'second') {
      setLike2(like2 + 1)
    }
    if (value === 'third') {
      setLike3(like3 + 1)
    }
    if (value === 'fourth') {
      setLike4(like4 + 1)
    }
    if (value === 'fifth') {
      setLike5(like5 + 1)
    }
    if (value === 'sixth') {
      setLike6(like6 + 1)
    } 
  }
  
  const panel = ({ name, value }) => < Button name={name} handleLike={handleLike} value={value}/>
  return (
    <div className='button-panel'>
      <div>
        {getMax()}
      </div>
      <div>
        <div>
          <p>Game of Thrones</p>
          {panel({name: 'Like', value: 'first'})}
          <p>{like1}</p>
        </div>
        <div>
          <p>Merlin</p>
          {panel({name: 'Like', value: 'second'})}
          <p>{like2}</p>
        </div>
        <div>
          <p>Avengers</p>
          {panel({name: 'Like', value: 'third'})}
          <p>{like3}</p>
        </div>
        <div>
          <p>The Return</p>
          {panel({name: 'Like', value: 'fourth'})}
          <p>{like4}</p>
        </div>
        <div>
          <p>Boss Level</p>
          {panel({name: 'Like', value: 'fifth'})}
          <p>{like5}</p>
        </div>
        <div>
          <p>Riddick</p>
          {panel({name: 'Like', value: 'sixth'})}
          <p>{like6}</p>
        </div>
      </div> 
    </div>
  )
}

const Button = ({name, handleLike, value}) => {
   let buttonn = 'button'
  return (
  <button type='button' className={buttonn} onClick={()=>handleLike(value)}>{name}</button>
)}

export default App;
