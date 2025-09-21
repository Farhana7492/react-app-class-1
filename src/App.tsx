import Header from "./components/Header";
import Card from "./Card";
import Footer from "./components/Footer";
import Loop from "./components/Loop";
import PropsPage from "./components/PropsPage";
import UseState from "./components/UseState";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <Card />
      <PropsPage />
      <Loop /> */}
      <Outlet />
      <Footer />
      {/* <UseState /> */}
    </>
  );
}
export default App;
