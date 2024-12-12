import React from "react";

type Item = {
    type: string;
    isPacked: boolean;
    };

const Item: React.FC<Item> = ({ type, isPacked }) => {
    if (isPacked) {
        return <li className="item">{type} ✅</li>;
      }
      return <li className="item">{type}</li>;
};

export default Item;