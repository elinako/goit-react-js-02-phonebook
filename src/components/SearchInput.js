import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
  border: 2px solid paleviolet;
`;

export default function SearchInput({ value, onChangeSearchInput }) {
  return (
    <>
      <p>Find contact by name:</p>
      <Input
        type="text"
        value={value}
        onChange={onChangeSearchInput}
        placeholder="Enter name to search"
      />
    </>
  );
}
