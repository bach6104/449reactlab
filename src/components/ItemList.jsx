function ItemList({ items }) {
    return (
      <div>
        <h2>📦 Item List</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} — ${item.price} {item.inStock ? '✅' : '❌'}
            </li>
          ))}
        </ul>
      </div>
    )
  }
export default ItemList
  