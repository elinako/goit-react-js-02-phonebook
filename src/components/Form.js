import React, { Component } from "react";
import styled from "styled-components";
import PropTypes, { string } from "prop-types";

const FormContact = styled.form`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid blue;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 150px;
`;

const Label = styled.label`
  width: 230px;
  display: flex;
  justify-content: space-between;
`;

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <p>Phonebook</p>
        <FormContact onSubmit={this.handleSubmit}>
          <Label>
            Name
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={this.onChangeName}
            />
          </Label>
          <Label>
            Number
            <input
              type="tel"
              placeholder="XXX-XX-XX"
              value={number}
              onChange={this.onChangeNumber}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormContact>
      </>
    );
  }

 

}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
