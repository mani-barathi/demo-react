import React, { useState } from "react";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submiteed");
    const payload = { title, text };

    async function sendData() {
      fetch("http://localhost:5000/api/data/create", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      });
    }
    sendData();
  }

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        title: <input type="text" onChange={(e) => setTitle(e.target.value)} />{" "}
        <br />
        text: <input
          type="text"
          onChange={(e) => setText(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePage;
