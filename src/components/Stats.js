export default function Stats({ items }) {
  // early return
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your cart🚀</em>
      </p>
    );
  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numOfPackedItems / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything ready to go ✈️"
          : `
                🧳 You have ${numOfItems} items on your list, and you already packed ${numOfPackedItems} (${percentPacked}%)
              `}
      </em>
    </footer>
  );
}
