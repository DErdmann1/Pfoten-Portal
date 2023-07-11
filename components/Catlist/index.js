import React from "react";
import Image from "next/image";

export default function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <Image src={item.image} alt={item.name} width={500} height={500} />
          <p>Alter: {item.age}</p>
          <p>Geschlecht: {item.gender}</p>
          <p>Rasse: {item.breed}</p>
          <p>Standort: {item.location}</p>
          <button>Mehr Details..</button>
        </li>
      ))}
    </ul>
  );
}
