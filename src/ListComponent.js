// ListComponent.js
function ListComponent({ items, renderItem }) {
  if (!items || items.length === 0) {
    return <div className="no-items">No items found</div>;
  }

  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;import { useEffect, useState } from 'react';
import ListComponent from './components/ListComponent';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ListComponent
        items={users}
        renderItem={(user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        )}
      />
    </div>
  );
}

export default App;import React from 'react';

const ListComponent = ({ items, renderItem }) => {
  return (
    <ul>
      {items.map(renderItem)}
    </ul>
  );
import React from 'react';

const ListComponent = ({ items, renderItem }) => {
  return <ul>{items.map(renderItem)}</ul>;
};

export default ListComponent;};

export default ListComponent;
