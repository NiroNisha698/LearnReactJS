import { useState } from "react";

interface Props {
    items: string[];
    heading: string
    onSelectItem : (item:string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London"];

  //Hook
 const [selectedIndex, setSelectedIndex]= useState(-1);
  //function
  const getGreeting = () => {
    return <h1>Hello Good Morning</h1>;
  };

  return (
    <>
      <h1> {heading}</h1>
      {items.length === 0 ? <p> No Records</p> : null}
      <ul className="list-group">
        {getGreeting()}

        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
            key={item}
            onClick={() => {
                setSelectedIndex(index)
                onSelectItem(item)
            }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
