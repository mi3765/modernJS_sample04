import './App.css';
import { React, useState, useCallback, useMemo } from 'react';
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

  // アロー関数は毎回違う関数と判断されて再レンダリングされる
  // useCallbackで再レンダリングを最適化
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // useMemoは変数の再レンダリング最適化
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <>
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
    </>
  );
};
