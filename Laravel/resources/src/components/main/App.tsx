import { CustomerApp } from "../customer/CustomerApp";
import { PhotographerApp } from "../photographer/PhotographerApp";
import { LandingPage } from "../other/LandingPage";
import { PhotographerDiscovery } from "../photographer/PhotographerDiscovery";
import { AllPhotographers } from "../other/AllPhotographers";
import { SidebarDemo } from "../other/SidebarDemo";
import { BookingDetailDemo } from "../other/BookingDetailDemo";
import { ThemeProvider } from "../ui/theme-provider";

import { CustomerAuth } from "../customer/Auth/CustomerAuth";
import { PhotographerAuth } from "../photographer/Auth/PhotographerAuth";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import { useState } from "react";

function AppContent() {
    const navigate = useNavigate();

    const handleDiscoverPhotographers = () => {
        navigate("/discovery");
    };

    const handleViewAllPhotographers = () => {
        navigate("/all-photographers");
    };

    const handleBookPhotographer = (photographerId: string) => {
        console.log("Booking photographer:", photographerId);
        navigate("/customer");
    };

    const [customerAuthenticated, setCustomerAuthenticated] = useState(false);

    const handleCustomerLogin = () => {
        setCustomerAuthenticated(true);
        navigate("/customer");
    };

    const [photographerAuthenticated, setPhotographererAuthenticated] = useState(false);

    const handlePhotographerLogin = () => {
        setPhotographererAuthenticated(true);
        navigate("/photographer");
    };

    return (
        <Routes>
            {/* Landing Page */}
            <Route
                path="/"
                element={
                    <LandingPage
                        onBookPhotographer={handleBookPhotographer}
                        onDiscoverPhotographers={handleDiscoverPhotographers}
                        onViewAllPhotographers={handleViewAllPhotographers}
                    />
                }
            />

            {/* Customer side */}
            <Route
                path="/customer"
                element={
                    <CustomerApp
                        onBack={() => navigate("/")}
                        isAuthenticated={customerAuthenticated}
                        onLogin={handleCustomerLogin}
                    />
                }
            />
            <Route
                path="/customer-auth-login"
                element={
                    <CustomerAuth
                        onBack={() => navigate("/")}
                        onLogin={handleCustomerLogin}
                    />
                }
            />
            <Route
                path="/customer-auth-register"
                element={
                    <CustomerAuth
                        onBack={() => navigate("/")}
                        onLogin={() => navigate("/customer-auth-login")}
                    />
                }
            />

            {/* Photographer side */}
            <Route
                path="/photographer"
                element={
                  <PhotographerApp
                    onBack={() => navigate("/")}
                    isAuthenticated = {photographerAuthenticated}
                    onLogin={handlePhotographerLogin}
                  />}
            />
            <Route
                path="/photographer-auth-login"
                element={
                    <PhotographerAuth
                        onBack={() => navigate("/")}
                        onLogin={handlePhotographerLogin}
                    />
                }
            />
            <Route
                path="/photographer-auth-register"
                element={
                    <PhotographerAuth
                        onBack={() => navigate("/")}
                        onLogin={() => navigate("/photographer-auth-login")}
                    />
                }
            />

            {/* Other pages */}
            <Route
                path="/discovery"
                element={
                    <PhotographerDiscovery
                        onBack={() => navigate("/")}
                        onBookPhotographer={handleBookPhotographer}
                    />
                }
            />
            <Route
                path="/all-photographers"
                element={
                    <AllPhotographers
                        onBack={() => navigate("/")}
                        onBookPhotographer={handleBookPhotographer}
                    />
                }
            />
            <Route
                path="/sidebar-demo"
                element={<SidebarDemo onBack={() => navigate("/")} />}
            />
            <Route
                path="/booking-detail"
                element={<BookingDetailDemo onBack={() => navigate("/")} />}
            />
        </Routes>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <Router>
                 <AppContent />
            </Router>
        </ThemeProvider>
    );
}
