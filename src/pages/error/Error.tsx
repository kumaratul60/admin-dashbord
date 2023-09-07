import "./error.scss";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err: any = useRouteError();
  return (
    <div>
      <h1>Oops... Something went wrong</h1>
      <div className="error">
        <h1> {`${err?.status ?? "check again "}`}</h1>
        <p> {`${err?.error?.message ?? "❌ "} - ${err?.data}}`}</p>
      </div>
    </div>
  );
};

export default Error;
