import React, {Fragment, useCallback, useRef, useState} from "react";
import UltimateBarrage, {UltimateBarrageMethod} from "./UltimateBarrage";
import './temp.css'

const App: React.FC = () => {
  const [message, setMessage] = useState("")
  const barrage = useRef<UltimateBarrageMethod>(null)

  const sendMessage = () => {
    if (message.trim() === '') {
      alert("请输入弹幕后发送")
      return
    }

    if (barrage.current) {
      barrage.current.send(<div>{message}</div>)
      setMessage("")
    }
  }

  const clearUltimate = () => {
    if (barrage.current) {
      barrage.current.clear()
    }
  }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }, [message])

  return (
    <Fragment>
      <section className="container">
        <video controls src={require('./static/video.mp4')}/>
        <UltimateBarrage ref={barrage} className="wrapper">
          <p>hello world</p>
        </UltimateBarrage>
      </section>

      <input placeholder="请输入弹幕" className="input" type="text" value={message} onChange={handleChange}/>

      <section className="btn_group">
        <button onClick={sendMessage}>发送弹幕</button>
        <button onClick={clearUltimate}>清除所有单独</button>
      </section>
    </Fragment>
  )
}

export default App
