import { BrowserRouter as Router } from "react-router-dom";
import Endpoints from "./endpoints";

const RoutesApp = () => {
  return (
    <Router>
      <Endpoints />
    </Router>
  );
};

export default RoutesApp;
