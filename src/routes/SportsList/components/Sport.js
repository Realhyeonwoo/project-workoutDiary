import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Input, Button } from "reactstrap";

const Sport = ({ sport, deleteSport, updateSport }) => {
  const [sort, setSort] = useState(sport.sort);
  const [name, setName] = useState(sport.name);
  const [edit, setEdit] = useState(false);

  const onChange = e => {
    if (e.target.name === "select") {
      setSort(e.target.value);
    } else {
      setName(e.target.value);
    }
  };

  const onEdit = () => setEdit(!edit);

  const onUpdate = () => {
    if (name.trim().length === 0) {
      toast.error("운동명을 입력하세요", {
        autoClose: 1000,
        hideProgressBar: true
      });
      return;
    } else {
      console.log("component");
      console.log(sport._id, sort, name);
      updateSport(sport._id, sort, name);
      toast.success("수정 완료!😎", {
        autoClose: 1000,
        hideProgressBar: true
      });
      onEdit();
    }
  };

  const onDelete = id => {
    deleteSport(id);
    toast.success("삭제 완료!😎", {
      autoClose: 1000,
      hideProgressBar: true
    });
  };
  return (
    <div>
      {edit ? (
        <>
          <ToastContainer />
          <Input
            type="select"
            name="select"
            id="sportSort"
            value={sort}
            onChange={onChange}
          >
            <option value="-">-</option>
            <option value="가슴">가슴</option>
            <option value="등">등</option>
          </Input>
          <Input type="text" value={name} onChange={onChange} />
          <Button onClick={onUpdate}>수정완료</Button>
        </>
      ) : (
        <>
          <Input type="text" value={sort} readOnly />
          <Input type="text" value={name} readOnly />
          <FaRegEdit onClick={onEdit} />
          <FaTrashAlt onClick={() => onDelete(sport._id)} />
        </>
      )}
    </div>
  );
};

Sport.propTypes = {
  sport: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

Sport.default = {
  sport: {}
};
export default Sport;
