import { useState } from "react";
import { CustomerApp } from "./components/CustomerApp";
import { PhotographerApp } from "./components/PhotographerApp";
import { LandingPage } from "./components/LandingPage";
import { PhotographerDiscovery } from "./components/PhotographerDiscovery";
import { AllPhotographers } from "./components/AllPhotographers";
import { SidebarDemo } from "./components/SidebarDemo";
import { BookingDetailDemo } from "./components/BookingDetailDemo";
import { ThemeProvider } from "./components/ui/theme-provider";

type UserRole =
  | "customer"
  | "photographer"
  | "discovery"
  | "all-photographers"
  | "sidebar-demo"
  | "booking-detail"
  | "landing"
  | null;

function AppContent() {
  const [currentRole, setCurrentRole] = useState("landing" as UserRole);

  const handleDiscoverPhotographers = () => {
    setCurrentRole("discovery");
  };

  const handleViewAllPhotographers = () => {
    setCurrentRole("all-photographers");
  };

  const handleBookPhotographer = (photographerId: string) => {
    // Navigate to customer app with specific photographer selected
    console.log("Booking photographer:", photographerId);
    setCurrentRole("customer");
  };

  if (currentRole === "customer") {
    return <CustomerApp onBack={() => setCurrentRole("landing")} />;
  }

  if (currentRole === "photographer") {
    return <PhotographerApp onBack={() => setCurrentRole("landing")} />;
  }

  if (currentRole === "discovery") {
    return (
      <PhotographerDiscovery
        onBack={() => setCurrentRole("landing")}
        onBookPhotographer={handleBookPhotographer}
      />
    );
  }

  if (currentRole === "all-photographers") {
    return (
      <AllPhotographers
        onBack={() => setCurrentRole("landing")}
        onBookPhotographer={handleBookPhotographer}
      />
    );
  }

  if (currentRole === "sidebar-demo") {
    return <SidebarDemo onBack={() => setCurrentRole("landing")} />;
  }

  if (currentRole === "booking-detail") {
    return <BookingDetailDemo onBack={() => setCurrentRole("landing")} />;
  }

  return (
    <LandingPage
      onNavigate={setCurrentRole}
      onDiscoverPhotographers={handleDiscoverPhotographers}
      onViewAllPhotographers={handleViewAllPhotographers}
      onBookPhotographer={handleBookPhotographer}
    />
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
