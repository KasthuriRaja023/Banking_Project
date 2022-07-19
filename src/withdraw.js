import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);

  // form validation
  function validate(field) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (field <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    if (field >= balAnce) {
      alert("Sorry mate, you don't have enough cash to Withdraw");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(withdraw)) return;
    var Money = balAnce - withdraw;
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Withdraw ₹" + withdraw);
  }
  function refreshWith() {
    setWithdraw("");
    setShow(true);
  }
  return (
    <>
      <form class="withdraw">
        <br />
        <div className="mb-0">
          <center>
            <h3 className="mb-6">Withdraw Amount in Your Account</h3>
          </center>
          <div className="mb-2">
            <label>
              <h4> &nbsp;&nbsp;&nbsp;&nbsp;Balance : ₹ {availablebal}</h4>
            </label>
          </div>

          <div className="mb-3">
            <label>
              <h4> &nbsp;&nbsp;&nbsp;&nbsp;Withdraw</h4>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Amount to be Withdrawn"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
          </div>

          <div>
            <center>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!withdraw}
                onClick={handleCreate}
              >
                Withdraw
              </button>
            </center>
          </div>
          <br />
        </div>
      </form>
    </>
  );
}
