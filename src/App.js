import Navbar from "./components/Navbar/Navbar.jsx";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
};
export default App;
