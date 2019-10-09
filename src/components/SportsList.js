import React from "react";
import PropTypes from "prop-types";

const SportsList = ({ sportsList }) => {
  return (
    <div>
      {sportsList ? (
        sportsList.map(sport => (
          <li key={sport.id}>
            {sport.sort}
            {sport.name}
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

// SportsList.defaultProps = {
//   sportsList: [
//     {
//       id: 0,
//       sort: "가슴",
//       name: "벤치프레스"
//     },
//     {
//       id: 1,
//       sort: "이두",
//       name: "덤벨"
//     }
//   ]
// };

export default SportsList;
