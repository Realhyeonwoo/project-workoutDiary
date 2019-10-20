import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const AddModal = ({
  modal,
  sportSort,
  sportName,
  toggle,
  handleSportInfo,
  handleSubmit
}) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>새로운 운동 추가</ModalHeader>
        <ModalBody>
          <ToastContainer style={{ color: "white" }} />
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="sportSort">분류</Label>
              <Input
                type="select"
                name="select"
                id="sportSort"
                value={sportSort}
                onChange={handleSportInfo}
              >
                <option value="-">-</option>
                <option value="가슴">가슴</option>
                <option value="등">등</option>
              </Input>
              <br />
              <Label for="sportName">종목</Label>
              <Input
                type="text"
                name="name"
                id="sportName"
                placeholder="새로운 운동 입력"
                defaultValue={sportName}
                onChange={handleSportInfo}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            추가하기
          </Button>
          <Button color="secondary" onClick={toggle}>
            취소
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

AddModal.propTypes = {
  modal: PropTypes.bool,
  sportSort: PropTypes.string,
  sportName: PropTypes.string,
  toggle: PropTypes.func,
  handleSport: PropTypes.func,
  handleSubmit: PropTypes.func
};

AddModal.defaultProps = {
  modal: false,
  sportSort: "",
  sportName: "",
  toggle: () => {},
  handleSport: () => {},
  handleSubmit: () => {}
};

export default AddModal;
