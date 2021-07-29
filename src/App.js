import React, { useState } from "react";
import "./styles.css";

var changeAmount = [2000, 500, 100, 20, 10, 5, 1];
var notes = new Array(7);

export default function App() {
  var [bill, setBill] = useState("");
  var [cashGiven, setCashGiven] = useState("");
  var [final, setFinal] = useState([]);
  var [flag, setFalg] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [empty, setEmpty] = useState(false);

  function billAmount(event) {
    bill = event.target.value;
    setBill(bill);
  }
  function givenAmount(event) {
    cashGiven = event.target.value;
    setCashGiven(cashGiven);
  }

  const handleNext = () => {
    if (!bill) {
      setEmpty(true);
    } else {
      setFalg(true);
      setEmpty(false);
    }
  };

  function clickHandler() {
    if (!cashGiven) {
      setEmpty(true);
    } else {
      setFlag2(true);
      setEmpty(false);
      notes = new Array(7);
      var amount = cashGiven - bill;
      for (var i = 0; i <= changeAmount.length; i++) {
        if (amount / changeAmount[i] >= 1) {
          notes[i] = Math.floor(amount / changeAmount[i]);
          amount = amount % changeAmount[i];
          setFinal((notes) => [...notes], notes[i]);
        }
      }
    }
  }

  function resetter() {
    setFlag2(false);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="intro">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
        <main>
          <form>
            <div className="bill-amount-input">
              <label for="bil-amt">
                <p>Enter Bill Amount</p>
              </label>
              <input onChange={billAmount} id="bil-amt" />
              {!flag && (
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
            <div className="given-amount-input">
              {flag && (
                <div className="given-amount">
                  <label for="given-amt">
                    <p>Enter Given Amount</p>
                  </label>
                  <input onChange={givenAmount} id="given-amt" />
                  {!flag2 && (
                    <button type="button" onClick={clickHandler}>
                      Calculate
                    </button>
                  )}
                  <button onClick={resetter} type="reset">
                    Reset
                  </button>
                </div>
              )}
            </div>
            <div>
              {flag2 && (
                <div>
                  <table id="tables">
                    <tr>
                      <th>No.of Notes</th>
                      <th>2000</th>
                      <th>500</th>
                      <th>100</th>
                      <th>20</th>
                      <th>10</th>
                      <th>5</th>
                      <th>1</th>
                    </tr>
                    <tr>
                      <th>Notes</th>
                      <th>{notes[0]}</th>
                      <th>{notes[1]}</th>
                      <th>{notes[2]}</th>
                      <th>{notes[3]}</th>
                      <th>{notes[4]}</th>
                      <th>{notes[5]}</th>
                      <th>{notes[6]}</th>
                    </tr>
                  </table>
                  <button type="button" onClick={clickHandler}>
                    Calculate
                  </button>
                </div>
              )}
              {/* <button onClick={resetter} type="reset">
                Reset
              </button> */}
            </div>
          </form>
          <div>{empty && <h2>PLease, Enter the Amounts Correctly!</h2>}</div>
          <h1>{final}</h1>
        </main>
      </div>
      <aside>
        <img src="./src/throw_flower.gif" />
      </aside>
    </div>
  );
}
