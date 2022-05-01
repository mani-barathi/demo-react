function Person(props) {
  console.log(props);
  // fragment
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
}

const name = "john";
const name2 = "mike";

// default export
export default Person;

// named export
export { name, name2 };
