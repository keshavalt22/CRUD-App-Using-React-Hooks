import EditUser from "./EditUser";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/edit/:slug"
        element={
          <EditUser
          />
        }
      />
    </Routes>
  );
}

export default App;
