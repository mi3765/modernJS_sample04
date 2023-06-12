import './App.css';
import { React, useState } from 'react';
import { ChildArea } from './ChildArea';

export default function App() {
  const [ text, setText] = useState("");
  const [ open, setOpen ] = useState(false);
  
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}></ChildArea>
    </>
  );
};
