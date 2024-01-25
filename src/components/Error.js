import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops !!</h1>
      <p>Something Went Wrong !!!!!</p>
      <h2>{status + " " + statusText}</h2>
    </div>
  );
};

export default Error;
