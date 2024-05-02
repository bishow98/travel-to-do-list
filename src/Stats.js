export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding something to the travel list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <div className="stats">
      <em>
        {percentPacked === 100
          ? "You're ready to go for a trip 💼"
          : `you have ${numItems} Items on your list and you have packed ${numPacked}
        items ${percentPacked}% items are packed`}
      </em>
    </div>
  );
}
