import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UseProvider from "./users/providers/UseProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import CustomThemeProvider from "./providers/CusromThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <UseProvider>
        <CustomThemeProvider>
          <SnackbarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackbarProvider>
        </CustomThemeProvider>
      </UseProvider>
    </BrowserRouter>
  );
}

export default App;
