import React, {useState} from 'react';
import {
    Row, Col, Toast
} from 'react-bootstrap';

export default function ToastView(props) {
    const { message, title, showByPros = false } = props;
    const [show, setShow] = useState(showByPros);
  
    return (
      <Row className="mr-auto ml-auto">
        <Col>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">{title ? title : ''}</strong>
            </Toast.Header>
            <Toast.Body className="text-secondary">{message ? message : ''}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
}
