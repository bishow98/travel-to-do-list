import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem); //yesle chai naya items add garda yo argument pathauxa ra yo onAddItems vanney function call hunxa parent component ma gayera

    setdescription("");
    setquantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <span>What do you need for 😍 trip?</span>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setdescription(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}
