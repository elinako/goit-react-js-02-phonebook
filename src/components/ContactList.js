import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import PropTypes from "prop-types";
uuidv4();

const List = styled.ul`
  width: 360px;
  border: 2px solid #c0ebff;
  display: block;
`;
const ListItem = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <p>Contacts:</p>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={uuidv4()}>
            {name} : {number}
            <button onClick={() => onDeleteContact(id)}>delete</button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

ContactList.defaultProps = {
  name: "Name Surname",
  number: "000-00-00",
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
