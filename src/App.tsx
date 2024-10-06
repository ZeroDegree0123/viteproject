import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";

import "./App.css";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like/Like";

function App() {
  const [open, setOpen] = useState(false);
  let items = ["Miami", "New York", "Austin", "Vancouver"];
  const handleClick = (item: string) => console.log(item);

  return (
    <div>
      {/* {open && <Alert onClose={() => setOpen(false)}>This is an alert</Alert>}

      <Button color="secondary" onClick={() => setOpen(!open)}>
        Press Me
      </Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleClick} />
      <BsFillCalendarFill color="red" size={40} /> */}
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
