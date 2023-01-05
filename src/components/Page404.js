import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="main_container">
      <h1>Page Not Found</h1>
      <p>This URL is not correct</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
