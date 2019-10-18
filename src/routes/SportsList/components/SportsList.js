import React from "react";
import PropTypes from "prop-types";

import Sport from "./Sport";

const SportsList = ({ sportsList, ...props }) => {
  return (
    <div>
      {sportsList ? (
        sportsList.map(sport => (
          <Sport key={sport._id} sport={sport} {...props} />
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
      _id: PropTypes.string.isRequired,
      sort: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

SportsList.defaultProps = {
  sportsList: []
};

export default SportsList;
