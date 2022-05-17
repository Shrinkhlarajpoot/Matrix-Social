import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

function App() {
  const { darkTheme } = useSelector((state) => state.user);
  return (
    <div className={`App p-0 m-0 ${darkTheme ? "dark" : ""}`}>
      <AppRoutes />
    </div>
  );
}

export default App;
