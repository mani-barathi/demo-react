import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DynamicDataPage() {
  const [post, setPost] = useState();
  const params = useParams();
  console.log("data id:", params.dataId);

  useEffect(() => {
    async function getOneData() {
      const res = await fetch(
        `http://localhost:5000/api/data/${params.dataId}`
      );
      const data = await res.json();
      console.log(data);
      setPost(data);
    }

    getOneData();
  }, []);

  return (
    <div>
      <h1>DynamicDataPage</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      )}
    </div>
  );
}

export default DynamicDataPage;
