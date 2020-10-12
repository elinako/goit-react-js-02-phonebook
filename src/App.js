import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import SearchInput from "./components/SearchInput";
import styled from "styled-components";
uuidv4();

const Container = styled.div`
  font-family: sans-serif;
  font-size: 16px;
`;

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };


  
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      this.state.contacts.some(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  filterContacts = (filter) => {
    this.setState({
      filter: filter.target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (taskId) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== taskId
    );

    this.setState({ contacts: newContacts });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Form onSubmit={this.addContact} />
        <SearchInput value={filter} onChangeSearchInput={this.filterContacts} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }

  componentDidMount() {
    let values = Object.values(localStorage);
    let apdatedValues = values.map(value => JSON.parse(value));
    console.log(apdatedValues);
  this.setState({contacts:apdatedValues})
   
  }
 

  componentDidUpdate(prevProps,prevState) {
    this.state.contacts.map(contact=> localStorage.setItem(contact.id, JSON.stringify(contact)));

    
  
  }
  
}
