import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';



const UserDetailsModal = ({showModal,data,handleClose}) => {
console.warn('Model',data);
  return (
      <Modal show={showModal} onHide={()=> handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>{data.username}</div>
          <div>{data.email}</div>
          <div>{data.address.street},{" "}
              {data.address.suite}, {data.address.city}, {data.address.zipcode}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleClose()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

// UserDetailsModal.propTypes = {
//   show : PropTypes.bool,
//   data: PropTypes.any,
//   handleClose: PropTypes.func
// }

export default UserDetailsModal;
