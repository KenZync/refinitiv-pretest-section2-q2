import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [filterItems, setFilterItems] = useState([]);
  const [items, setItems] = useState([]);
  const getData = () => {
    axios
      .get("https://api.publicapis.org/categories")
      .then((response) => {
        console.log(response);
        setItems(response.data);
        setFilterItems(response.data);
      })
      .catch((err) => console.error(err));
  };

  function handleSearch(e) {
    setFilterItems(
      items.filter(
        (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      )
    );
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      Filter<input type="text" onChange={handleSearch}></input>
      <table>
        <thead>
          <tr>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {filterItems.map((item) => (
            <tr>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
