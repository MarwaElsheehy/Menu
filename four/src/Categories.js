import React from "react";
import { Button, Col, Row } from "react-bootstrap";
const Categories = ({filter, all})=>{
    const onFilter = (cat)=>{
        filter(cat)
    }
    return(
        <>
        <Row className="my-2 mb-5">
            <Col sm="12" className="d-flex justify-content-center">
                {
                    all.length >= 1 ? (all.map((item)=>{
                        return(
                            <div>
                            <Button onClick={()=> onFilter(item)} className="mx-2" variant="outline-success">{item}</Button>
                            </div>
                        )
                    })) : <h3>No Data Found</h3>
                }
            </Col>
        </Row>
        </>
    )
}
export default Categories