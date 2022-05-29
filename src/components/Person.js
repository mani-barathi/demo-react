function Person({ name, age, isAdult, deletePerson }) {
  const handleClick = () => {
    deletePerson(name);
  };

  return (
    <div className="flex">
      <p>{name} </p>
      <p>{age}</p>
      <p>{isAdult}</p>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
// default export
export default Person;
