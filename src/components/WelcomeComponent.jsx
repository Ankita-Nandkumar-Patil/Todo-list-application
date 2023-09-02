import { useParams, Link } from "react-router-dom";
import axios from "axios";
function WelcomeComponent() {
  const { username } = useParams();

  console.log(username);
  function helloWorldAPI() {
    // console.log("called");

    axios
      .get("http://localhost:8080/hello-world")
      .then((response) => successfulResponse(response))
      .catch((response) => errorResponse(response))
      .finally(console.log("cleanup"));
  }
  function successfulResponse(response) {
    console.log(response);
  }
  function errorResponse(response) {
    console.log(response);
  }
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-primary m-5" onClick={helloWorldAPI}>
          Hello World
        </button>
      </div>
    </div>
  );
}

export default WelcomeComponent;
