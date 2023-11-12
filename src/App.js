import Home from "./routes/home/home.component";
import "./App.css";
import "./categories.styles.scss";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component"

const Shop = () => {
  return <h1>Hello I am the shopping page.</h1>
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth"ud element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
