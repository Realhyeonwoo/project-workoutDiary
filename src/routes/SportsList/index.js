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

import SportsList from "./components/SportsList";

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
    this.props.readSport();
  }
  render() {
    console.log("Rendering@@");
    const { sportName, sportSort } = this.state;
    return (
      <div>
        <ToastContainer />
        <SportsList {...this.props} />
        <Button onClick={this.toggle}>추가하기</Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>새로운 운동 추가</ModalHeader>
          <ModalBody>
            <ToastContainer style={{ color: "white" }} />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="sportSort">분류</Label>
                <Input
                  type="select"
                  name="select"
                  id="sportSort"
                  value={sportSort}
                  onChange={this.handleSportInfo}
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
                  onChange={this.handleSportInfo}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              추가하기
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              취소
            </Button>
          </ModalFooter>
        </Modal>
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
