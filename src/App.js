import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";
import { useSelector } from "react-redux";
import { ToastWrapper } from "./components";

function App() {
  const { darkTheme } = useSelector((state) => state.user);
  return (
    <div className={`App p-0 m-0    ${darkTheme==="dark" ? "dark" : "light"}   `}>
      <ToastWrapper/>
      <AppRoutes />
    </div>
  );
}

export default App;
