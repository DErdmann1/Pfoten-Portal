import React from "react";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <p>Alter: {item.age}</p>
          <p>Geschlecht: {item.gender}</p>
          <p>Rasse: {item.breed}</p>
          <p>Standort: {item.location}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
