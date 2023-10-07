import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="h-screen w-full">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
