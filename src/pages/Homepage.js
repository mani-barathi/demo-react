import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      // "http://localhost:3000manibharathi";
      // fetch("manibarathi");
      const res = await fetch("http://localhost:5000/api/data");
      const resData = await res.json();
      console.log(resData);
      setData(resData.results);
    }

    getData();
  }, []);

  return (
    <div>
      {data.map((d) => (
        <Link key={d.id} to={`/data/${d.id}`} className="">
          <h3>{d.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default Homepage;
