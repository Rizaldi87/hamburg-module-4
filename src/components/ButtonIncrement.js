export const ButtonIncrement = ({ name, ...rest }) => {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={rest.incrementCounter}>Increment State</button>
    </div>
  );
};
