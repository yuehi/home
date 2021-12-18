import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です</h1>
      <Link to="/Page1/DetailA">DetailA</Link>
      <br />
      <Link to="/Page1/DetailB">DetailB</Link>
    </div>
  );
};
