import { Card } from "react-bootstrap";
import Bank from "./bank.png";
import "./styles.css";

export default function Home() {
  return (
    <div class="bank">
      <Card class="card" style={{ width: "35rem" }}>
        <Card.Img variant="top" src={Bank} />
        <Card.Body>
          <Card.Title class="bank-1">Welcome To,</Card.Title>
          <Card.Title class="bank-1">
            Federal Reserve Bank Of Chicago.
          </Card.Title>
          <Card.Text class="bank-2">
            The Federal Reserve Bank of Chicago participates in the formulation
            and implementation of national monetary policy, supervises and
            regulates designated financial institutions, and provides financial
            services to depository institutions and the U.S. government.Create
            and explore your account.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
