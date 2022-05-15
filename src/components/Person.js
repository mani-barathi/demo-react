function Person({ name, age, isAdult }) {
  return (
    <div className="flex">
      <p>{name} </p>
      <p>{age}</p>
      <p>{isAdult}</p>
    </div>
  );
}
// default export
export default Person;
