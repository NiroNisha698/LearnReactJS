import { useEffect, useState } from "react";



interface Props {
    items: string[];
    heading: string
    onSelectItem : (item:string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London"];

  //Hook
 const [selectedIndex, setSelectedIndex]= useState(-1);
 const [counter1, setCounter1]= useState(0);

  //function
  const getGreeting = () => {
    return <h1>Hello Good Morning</h1>;
  };

   //useEffect Examples
  //Type 1: Call useEffect after every render
//   useEffect(() => {
//     console.log("Use Effect Executing!!");
//   })

    //Type 2: Call useEffect only once initially load
    // useEffect((() => {
    // console.log("Use Effect Executing once!!");
    //  }),[])

  return (
    <>
      <h1> {heading}</h1>
      {items.length === 0 ? <p> No Records</p> : null}
      <ul className="list-group">
        {getGreeting()}

        <h1>{counter1}</h1>

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

        <button className="btn btn-primary m-2" onClick={() => setCounter1(counter1 + 1)}>Increment</button>
      </ul>
    </>
  );
}

export default ListGroup;
