import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import router, { queryClient } from "./routes/routes";

function App() {
  return (
    <div className="h-screen w-full">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
