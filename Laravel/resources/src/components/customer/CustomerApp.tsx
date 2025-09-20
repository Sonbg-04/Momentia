import { useState } from "react";
import { CustomerAuth } from "./Auth/CustomerAuth";
import { CustomerHome } from "./CustomerHome";
import { CustomerBookings } from "./CustomerBookings";
import { CustomerChat } from "./CustomerChat";
import { CustomerProfile } from "./CustomerProfile";
import { CustomerEditProfile } from "./CustomerEditProfile";
import { AppLayoutWithSidebar } from "../other/AppLayoutWithSidebar";

type CustomerView =
    | "home"
    | "bookings"
    | "messages"
    | "profile"
    | "edit-profile";

interface CustomerAppProps {
    onBack: () => void;
    isAuthenticated: boolean;
    onLogin: () => void;
}

export function CustomerApp({
    onBack,
    isAuthenticated,
    onLogin,
}: CustomerAppProps) {
    const [currentView, setCurrentView] = useState<CustomerView>("home");

    if (!isAuthenticated) {
        return <CustomerAuth onBack={onBack} onLogin={onLogin} />;
    }

    const handleNavigate = (section: string) => {
        switch (section) {
            case "home":
                setCurrentView("home");
                break;
            case "bookings":
                setCurrentView("bookings");
                break;
            case "messages":
                setCurrentView("messages");
                break;
            case "profile":
                setCurrentView("profile");
                break;
            case "settings":
                setCurrentView("profile");
                break;
            case "wallet":
                // Wallet feature disabled - redirect to profile
                setCurrentView("profile");
                break;
            case "logout":
                onBack();
                break;
            default:
                break;
        }
    };

    // Filter handling removed - filters are now integrated into individual tabs
    const getPageTitle = () => {
        switch (currentView) {
            case "home":
                return "Trang chủ";
            case "bookings":
                return "Buổi chụp";
            case "messages":
                return "Tin nhắn";
            case "profile":
                return "Hồ sơ";
            case "edit-profile":
                return "Chỉnh sửa hồ sơ";
            default:
                return "Momentia";
        }
    };

    const getBreadcrumbs = () => {
        switch (currentView) {
            case "edit-profile":
                return [{ label: "Hồ sơ", href: "#" }, { label: "Chỉnh sửa" }];
            default:
                return [];
        }
    };

    const renderContent = () => {
        switch (currentView) {
            case "home":
                return (
                    <CustomerHome
                        onNavigate={(view: string) =>
                            setCurrentView(view as CustomerView)
                        }
                    />
                );
            case "bookings":
                return (
                    <CustomerBookings
                        onNavigate={(view: string) =>
                            setCurrentView(view as CustomerView)
                        }
                    />
                );
            case "messages":
                return <CustomerChat onBack={() => setCurrentView("home")} />;
            case "profile":
                return (
                    <CustomerProfile
                        onNavigate={(view: string) =>
                            setCurrentView(view as CustomerView)
                        }
                    />
                );
            case "edit-profile":
                return (
                    <CustomerEditProfile
                        onBack={() => setCurrentView("profile")}
                    />
                );
            default:
                return (
                    <CustomerHome
                        onNavigate={(view: string) =>
                            setCurrentView(view as CustomerView)
                        }
                    />
                );
        }
    };

    return (
        <AppLayoutWithSidebar
            onNavigate={handleNavigate}
            onBack={onBack}
            title={getPageTitle()}
            breadcrumbs={getBreadcrumbs()}
            userRole="customer"
        >
            {renderContent()}
        </AppLayoutWithSidebar>
    );
}
