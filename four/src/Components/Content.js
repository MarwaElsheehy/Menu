import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
const Content = ({data}) => {
  return (
    <>
      <Row>
        <Zoom>
        {
          data.length >= 1 ? (data.map((item)=>{
            return (
              <Col key={item.id} sm="12" className="mb-3">
              <Card className="d-flex flex-row">
                <Card.Img variant="top" src={item.img} style={{ width: "200px" }}/>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div>{item.title}</div>
                    <div style={{ color: "green" }}>{item.price}</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            )
          })): <h3 className='text-center'>No Data Found</h3>
        }
        </Zoom>
      </Row>
    </>
  );
};
export default Content;
