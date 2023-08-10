export default function Item({ item, onDeleteItems, onUpdateItems }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onUpdateItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
