import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardRB(props) {
  return (
    <div>
      <Card className="text-white bg-dark a" style={{ width: "20rem" }}>
        <Card.Header className="content_heading">{`${props.id}. ${props.title}`}</Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            style={{ height: "25vh" }}
            src={`https://picsum.photos/1000?random=${Math.random() * 10 + 1}`}
          />
          <Card.Text
            className="content"
            style={{ marginTop: "10px" }}
          >{`${props.body}`}</Card.Text>

          <Button
            variant="primary btn-block"
            onClick={() => {
              console.log(" ");
              console.log("Id :", props.id);
              console.table("Title :", props.title);
              console.log("Body :", props.body);
            }}
          >
            Inspect?
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
