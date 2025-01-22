import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  backChange,
  change,
  decreament,
  increase,
  rest,
} from "./redux/Counter";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let dispatch = useDispatch();
  let { value, clr, clr2, bg } = useSelector((state) => state.counter);

  return (
    <>
      <div
        style={{
          backgroundColor: bg,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <h2 style={{ color: clr }}>Counter : {value} </h2>
          <div style={{ marginTop: "60px" }}>
            <button
              style={{
                backgroundColor: clr,
                width: "50px",
                height: "50px",
                marginLeft: "-20px",
              }}
              onClick={() => {
                dispatch(increase());
                dispatch(change());
                dispatch(backChange());
              }}
            >
              +
            </button>
            <label style={{ padding: "10px", color: clr2 }}>
              value:{value}
            </label>
            <button
              style={{ backgroundColor: clr2, width: "50px", height: "50px" }}
              onClick={() => {
                dispatch(decreament());
                dispatch(change());
              }}
            >
              -
            </button>
            <br />{" "}
            <button
              style={{
                height: "30px",
                width: "80px",
                marginLeft: "22px",
                marginTop: "20px",
              }}
              onClick={() => {
                dispatch(rest());
                dispatch(backChange());
              }}
            >Reset
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
