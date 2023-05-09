import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Flowers from "./features/flowers/Flowers";
import RegisterModal from "./features/register/RegisterModal";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <RegisterModal />
        <Routes>
          <Route index element={<Flowers />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
