function Person({ name, age }) {
  // console.log(props);
  // fragment
  return (
    <div className="flex">
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

const name = "john";
const name2 = "mike";

// default export
export default Person;

// named export
export { name, name2 };
