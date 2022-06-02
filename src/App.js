import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <div className='div-top'>
        <p>Game of Thrones</p>
        <video className='video-top' controls="controls">  
          <source src="#" type="video/mp4" /> 
        </video>
        {panel({name: 'Like', value: 'first'})}
        <p className='p-top2'>{like1}</p>
      </div>
      )
    }

    if (listMax(list) === like2) {
      return (
      <div className='div-top'>
        <p>Merlin</p>
        <video className='video-top' controls="controls">  
          <source src="#" type="video/mp4" /> 
        </video>
        {panel({name: 'Like', value: 'second'})}
        <p className='p-top2'>{like2}</p>
      </div>
      )
    }

    if (listMax(list) === like3) {
      return (
      <div className='div-top'>
        <p className='p-top'>Avengers</p>
        <video className='video-top' controls="controls">  
          <source src="#" type="video/mp4" /> 
        </video>
        {panel({name: 'Like', value: 'third'})}
        <p className='p-top2'>{like3}</p>
      </div>
      )
    }

    if (listMax(list) === like4) {
      return (
      <div className='div-top'>
        <p className='p-top'>Moana</p>
        <video className='video-top' controls="controls">  
          <source src="#" type="video/mp4" /> 
        </video>
        {panel({name: 'Like', value: 'fourth'})}
        <p className='p-top2'>{like4}</p>
      </div>
      )
    }

    if (listMax(list) === like5) {
      return (
      <div className='div-top'>
        <p className='p-top'>Transformers</p>
        <video className='video-top' controls="controls">  
          <source src="#" type="video/mp4" /> 
        </video>
        {panel({name: 'Like', value: 'fifth'})}
        <p className='p-top2'>{like5}</p>
      </div>
      )
    }

    if (listMax(list) === like6) {
      return (
      <div className='div-top'>
        <p className='p-top'>Riddick</p>
        <video className='video-top' controls="controls">  
          <source src="#" type="video/mp4" /> 
        </video>
        {panel({name: 'Like', value: 'sixth'})}
        <p className='p-top2'>{like6}</p>
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
      <h1 className='app-header'>NOLLYFLIX</h1>
      <div className='button-max'>
        {getMax()}
      </div>
      <div className='button-list'>
        <div className='button-node'>
          <p>Game of Thrones</p>
          <video className='video' controls="controls">  
            <source src="#" type="video/mp4" /> 
          </video>
          {panel({name: 'Like', value: 'first'})}
          <p>{like1}</p>
        </div>
        <div className='button-node'>
          <p>Merlin</p>
          <video className='video' controls="controls">  
            <source src="#" type="video/mp4" /> 
          </video>
          {panel({name: 'Like', value: 'second'})}
          <p>{like2}</p>
        </div>
        <div className='button-node'>
          <p>Avengers</p>
          <video className='video' controls="controls">  
            <source src="#" type="video/mp4" /> 
          </video>
          {panel({name: 'Like', value: 'third'})}
          <p>{like3}</p>
        </div>
        <div className='button-node'>
          <p>Moana</p>
          <video className='video' controls="controls">  
            <source src="#" type="video/mp4" /> 
          </video>
          {panel({name: 'Like', value: 'fourth'})}
          <p>{like4}</p>
        </div>
        <div className='button-node'>
          <p>Transformers</p>
          <video className='video' controls="controls">  
            <source src="#" type="video/mp4" /> 
          </video>
          {panel({name: 'Like', value: 'fifth'})}
          <p>{like5}</p>
        </div>
        <div className='button-node'>
          <p>Riddick</p>
          <video className='video' controls="controls">  
            <source src="#" type="video/mp4" /> 
          </video>
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
