import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./adminDashboard/Scenes/global/Topbar";
import Sidebar from "./adminDashboard/Scenes/global/Sidebar";
import Dashboard from "./adminDashboard/Scenes/Dashboard/Dashboard";
import Team from "./adminDashboard/Scenes/team/Team";
import Invoices from "./adminDashboard/Scenes/invoices/Invoices";
import Contacts from "./adminDashboard/Scenes/contacts/Contacts";
import Bar from "./adminDashboard/Scenes/Bar/Bar";
import Form from "./adminDashboard/Scenes/Form/Form";
import Line from "./adminDashboard/Scenes/Line/Line";
import Pie from "./adminDashboard/Scenes/Pie/Pie";
import FAQ from "./adminDashboard/Scenes/FAQ/FAQ";
// import Geography from "./adminDashboard/Scenes/Geography/Geography";
// import Calendar from "./adminDashboard/Scenes/Calendar/Calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="flex h-screen w-screen">
            <Sidebar isSidebar={isSidebar} />
            <main className="flex-1 flex flex-col">
              <Topbar setIsSidebar={setIsSidebar} />
              <div className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                </Routes>
              </div>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;