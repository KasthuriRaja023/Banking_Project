import { useState, useContext } from "react";
//import { Card } from "react-bootstrap";
import UserContext from "./context";

export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
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
    if (Number(field) <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit)) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
  }

  function refreshDepo() {
    setDeposit("");
    setShow(true);
  }

  return (
    <>
      <form class="deposit">
        <br />
        <div className="mb-0">
          <center>
            <h3 className="mb-6">Deposit Amount in Your Account</h3>
          </center>

          <div className="mb-2">
            <label>
              <h4>&nbsp;&nbsp;&nbsp;&nbsp;Balance : ₹ {availablebal}</h4>
            </label>
          </div>
          <div className="mb-3">
            <label>
              <h4>&nbsp;&nbsp;&nbsp;&nbsp;Deposit</h4>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Amount to be Deposited"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.currentTarget.value))}
            />
          </div>

          <div>
            <center>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!deposit}
                onClick={handleCreate}
              >
                Deposit
              </button>
            </center>
          </div>
          <br />
        </div>
      </form>
    </>
  );
}
