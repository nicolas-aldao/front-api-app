import React from "react";
import { Photocard } from "../Photocard";

export const ListOfPhotocards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
        <Photocard key={id} />
      ))}
    </ul>
  );
};
