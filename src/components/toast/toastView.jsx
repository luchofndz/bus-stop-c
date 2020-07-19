import React, {useState} from 'react';
import {
    Row, Col, Toast, Button
} from 'react-bootstrap';

export default function ToastView(props) {
    const { message, title, showByPros } = props;
    const [show, setShow] = useState(false);
  
    return (
      <Row>
        <Col>
          <Toast onClose={() => setShow(false)} show={showByPros ? showByPros : show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">{title ? title : ''}</strong>
            </Toast.Header>
            <Toast.Body>{message ? message : ''}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
}
