import { useEffect, useState } from "react";

const App = () => {
  const [item, setItem] = useState([]);
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 30);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: "30px" }}>
        Load more pagination react
      </h3>
      <div className="conttainer">
        {item.slice(0, visible).map((page) => (
          <div className="card">
            <div className="id">
              <span>{page.id}</span>
            </div>
            <p>{page.body}</p>
          </div>
        ))}
        <button onClick={showMoreItems}>Load more</button>
      </div>
    </div>
  );
};

export default App;
