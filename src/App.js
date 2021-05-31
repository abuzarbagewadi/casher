import React, { useState } from "react";
import "./styles.css";

var changeAmount = [2000, 500, 100, 20, 10, 5, 1];
var notes = new Array(7);

export default function App() {
  var [bill, setBill] = useState("");
  var [cashGiven, setCashGiven] = useState("");
  var [final, setFinal] = useState([]);

  function billAmount(event) {
    bill = event.target.value;
    setBill(bill);
  }
  function givenAmount(event) {
    cashGiven = event.target.value;
    setCashGiven(cashGiven);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <main>
        <div>
          <input onChange={billAmount} className="bil-amt" />
          <h2>Bill Amount: {bill}</h2>
          <div id="myDIV">
            <input onChange={givenAmount} className="bil-amt" />
            <h2>Amount given :{cashGiven} </h2>
          </div>
          <div>
            <button
              onClick={() => {
                notes = new Array(7);
                var amount = cashGiven - bill;
                for (var i = 0; i <= changeAmount.length; i++) {
                  if (amount / changeAmount[i] >= 1) {
                    notes[i] = amount / changeAmount[i];
                    amount = amount % changeAmount[i];
                    setFinal((notes) => [...notes], notes[i]);
                  }
                }
              }}
            >
              Calculate
            </button>
            <h1>{final}</h1>
            <div>
              <ul>
                <ul>2000notes</ul>
                {notes[0]}
              </ul>

              <ul>
                <ul>500notes</ul>
                {notes[1]}
              </ul>

              <ul>
                <ul>100notes</ul>
                {notes[2]}
              </ul>

              <ul>
                <ul>20notes</ul>
                {notes[3]}
              </ul>

              <ul>
                <ul>10notes</ul>
                {notes[4]}
              </ul>

              <ul>
                <ul>5notes</ul>
                {notes[5]}
              </ul>

              <ul>
                <ul>1notes</ul>
                {notes[6]}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
