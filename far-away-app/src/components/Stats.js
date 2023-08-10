export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to the trip </em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You probably good to go!"
          : ` You have ${numItems} items on your list, and you already placed
        ${numPacked} items (${percentagePacked || 0}) %`}
      </em>
    </footer>
  );
}
