import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
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

const SportsList = ({ sportsList, updateSport, deleteSport }) => {
  let modal = false;

  const onDeleteSport = id => {
    deleteSport(id);
  };

  const onUpdateSport = (id, sort, name) => {
    updateSport(id, sort, name);
  };

  return (
    <div>
      {sportsList ? (
        sportsList.map(sport => (
          <li key={sport.id}>
            {sport.sort}
            {sport.name}
            <FaRegEdit
              onClick={() => onUpdateSport(sport.id, sport.sort, sport.name)}
            />
            <FaTrashAlt onClick={() => onDeleteSport(sport.id)} />
          </li>
        ))
      ) : (
        <h3>운동 종목을 추가해주세요</h3>
      )}
    </div>
  );
};

SportsList.propTypes = {
  sportsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sort: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

SportsList.defaultProps = {
  sportsList: []
};

export default SportsList;
