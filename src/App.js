import React, { useState } from "react";
import "./styles.css";
import gif from "./EMO_120.gif";

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
    if (!bill || bill <= 0) {
      setEmpty(true);
    } else {
      setFalg(true);
      setEmpty(false);
    }
  };

  function clickHandler() {
    if (!cashGiven || cashGiven <= 0) {
      setEmpty(true);
      setFlag2(false);
      setFinal((notes = new Array(0, 0, 0, 0, 0, 0, 0)));
    } else if (!bill || bill <= 0) {
      setEmpty(true);
      setFalg(false);
      setFlag2(false);
    } else {
      setFlag2(true);
      setEmpty(false);
      notes = new Array(0, 0, 0, 0, 0, 0, 0);
      var amount = cashGiven - bill;
      if (amount < 0) {
        alert("given amount is zero or less than bill amount");
        setFlag2(false);
        setEmpty(true);
      } else if (amount === 0) {
        setFinal((notes = new Array(0, 0, 0, 0, 0, 0, 0)));
      }
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
    setFalg(false);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="intro">
          <h1 style={{ color: "green" }}>Cash Register Manager</h1>
          <h3 style={{ color: "green", padding: "0px 50px" }}>
            know minimum number of notes to return, by entering bill amount and
            cash given by the customer
          </h3>
        </div>
        <main>
          <form>
            <div className="bill-amount-input">
              <label for="bil-amt">
                <p>Enter Bill Amount</p>
              </label>
              <input type="number" onChange={billAmount} id="bil-amt" />
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
                  <input type="number" onChange={givenAmount} id="given-amt" />
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
                      {changeAmount.map((items) => {
                        return <th>{items}</th>;
                      })}
                    </tr>
                    <tr>
                      <th>Notes</th>
                      {changeAmount.map((items, index) => {
                        return (
                          <th style={{ backgroundColor: "white" }}>
                            {notes[index]}
                          </th>
                        );
                      })}
                    </tr>
                  </table>
                  <button type="button" onClick={clickHandler}>
                    Calculate
                  </button>
                </div>
              )}
            </div>
          </form>
          <div>{empty && <h2>PLease, Enter the Amounts Correctly!</h2>}</div>
          {/* <h1>{final}</h1> */}
        </main>
      </div>
      <aside className="right">
        <img src={gif} alt="gif" />
      </aside>
      <footer id="footer">
        <div id="footer-container">
          <div className="social">
            <h3>Social</h3>
            <a href="https://www.linkedin.com/in/irfan-nawaz/">
              <i
                className="fab fa-linkedin-in"
                style={{ paddingRight: "10px", paddingTop: "5px" }}
              ></i>
              linkedin
            </a>
            <a href="https://twitter.com/shaik__irfan">
              <i
                className="fab fa-twitter"
                style={{ paddingRight: "10px", paddingTop: "5px" }}
              ></i>
              twitter
            </a>
            <a href="https://github.com/Irfan-vit">
              <i
                className="fab fa-github"
                style={{ paddingRight: "10px", paddingTop: "5px" }}
              ></i>
              github
            </a>
          </div>
          <div className="author">
            <h3>Author</h3>
            <p>Made With ❤️ by Shaik Md Irfan Nawaz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
