import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./context";
import "./styles.css";

export default function Signin() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);
  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      alert("Please enter " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "password" && password.length < 8) {
      setStatus("Error: " + label);
      alert("Please enter minimum 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "name") {
      if (!isNaN(field)) {
        setStatus("Error: " + label);
        alert("Please Enter Valid Name");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }
    if (label === "email") {
      //setStatus("Error: " + label);
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        alert("Please enter a valid email address");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }
    return true;
  }
  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 0 });
    setShow(false);
    alert("Successfully Created");
  }
  function refreshForm() {
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <div class="card" id="form">
        {show ? (
          <>
            <div class="wholepage">
              <div class="card1">
                <div class="colfont">Create User Account</div>
                <div className="cardbody ">
                  <form>
                    <div class="cardtext">
                      <label class="form-label" for="exampleInputEmail1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                      />
                    </div>
                    <br />
                    <div className="cardtext">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <br />
                    <div className="cardtext">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                      />
                    </div>
                    <br />
                    <centre>
                      <button
                        type="submit"
                        className="btn-primary1 "
                        disabled={!name && !email && !password}
                        onClick={handleCreate}
                      >
                        Submit
                      </button>
                    </centre>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h5 class="">Successfully Account Created</h5>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={refreshForm}
            >
              Add another account
            </button>
            <br />
          </>
        )}
      </div>
    </>
  );
}
