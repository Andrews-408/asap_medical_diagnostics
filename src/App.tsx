import { useEffect, useState } from "react";
import { AppointmentPage } from "./pages/AppointmentPage";
import { PriceListPage } from "./pages/PriceListPage";
import AzapLandingPage from "./pages/LandingPage";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setPath(window.location.pathname);

    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  if (path === "/appointment") {
    return <AppointmentPage />;
  }

  if (path === "/price-list") {
    return <PriceListPage />;
  }

  return <AzapLandingPage />;
}

export default App;
