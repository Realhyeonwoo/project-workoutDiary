import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import {
  fetchSportsList,
  createSport,
  deleteSport,
  updateSport
} from "../../redux/actions";

import { Button } from "reactstrap";

import SportsList from "./components/SportsList";
import AddModal from "./components/AddModal";

class SportsListContainer extends React.Component {
  state = {
    modal: false,
    sportSort: "미분류",
    sportName: ""
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleSportInfo = e => {
    if (e.target.name === "select") {
      this.setState({
        sportSort: e.target.value
      });
    } else {
      this.setState({
        sportName: e.target.value
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { createSport } = this.props;
    const { sportSort, sportName } = this.state;
    if (sportName.trim().length === 0) {
      toast.error("운동항목을 입력하세요!", {
        autoClose: 1000,
        hideProgressBar: true
      });
      return;
    } else {
      createSport(sportSort, sportName);
      this.setState({
        sportName: "",
        sportSort: "",
        modal: false
      });
    }
  };

  componentDidMount() {
    const { readSport } = this.props;
    readSport();
  }

  render() {
    console.log("Rendering@@");
    const { modal, sportName, sportSort } = this.state;
    return (
      <div>
        <ToastContainer />
        <SportsList {...this.props} />
        <Button onClick={this.toggle}>추가하기</Button>
        <AddModal
          modal={modal}
          sportName={sportName}
          sportSort={sportSort}
          toggle={this.toggle}
          handleSportInfo={this.handleSportInfo}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

SportsListContainer.propTypes = {
  sportsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      sort: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  readSport: PropTypes.func,
  createSport: PropTypes.func,
  updateSport: PropTypes.func,
  deleteSport: PropTypes.func
};

SportsListContainer.default = {
  sportsList: [],
  readSport: () => {},
  createSport: () => {},
  updateSport: () => {},
  deleteSport: () => {}
};

const mapStateToProps = state => ({
  sportsList: state.sports
});

const mapDispatchToProps = dispatch => ({
  readSport: () => dispatch(fetchSportsList()),
  createSport: (sort, name) => dispatch(createSport(sort, name)),
  deleteSport: id => dispatch(deleteSport(id)),
  updateSport: (id, sort, name) => dispatch(updateSport(id, sort, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportsListContainer);
