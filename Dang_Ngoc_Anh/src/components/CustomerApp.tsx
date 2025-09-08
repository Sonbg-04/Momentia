import React, { useState } from 'react';
import { CustomerAuth } from './customer/CustomerAuth';
import { CustomerHome } from './customer/CustomerHome';
import { CustomerBookings } from './customer/CustomerBookings';
import { CustomerChat } from './customer/CustomerChat';
import { CustomerProfile } from './customer/CustomerProfile';
import { CustomerEditProfile } from './customer/CustomerEditProfile';
// CustomerWallet import removed - wallet features disabled
import { AppLayoutWithSidebar } from './AppLayoutWithSidebar';
import { ThemeToggle } from './ui/theme-toggle';
import { Button } from './ui/button';
import { Bell } from 'lucide-react';
import { Badge } from './ui/badge';

interface CustomerAppProps {
  onBack: () => void;
}

type CustomerView = 'home' | 'bookings' | 'messages' | 'profile' | 'edit-profile';

export function CustomerApp({ onBack }: CustomerAppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<CustomerView>('home');
  // Filter state removed - filters are now integrated into individual tabs

  if (!isAuthenticated) {
    return (
      <CustomerAuth 
        onBack={onBack}
        onLogin={() => setIsAuthenticated(true)} 
      />
    );
  }

  const handleNavigate = (section: string) => {
    switch (section) {
      case 'home':
        setCurrentView('home');
        break;
      case 'bookings':
        setCurrentView('bookings');
        break;
      case 'messages':
        setCurrentView('messages');
        break;
      case 'profile':
        setCurrentView('profile');
        break;
      case 'settings':
        setCurrentView('profile');
        break;
      case 'wallet':
        // Wallet feature disabled - redirect to profile
        setCurrentView('profile');
        break;
      case 'logout':
        onBack();
        break;
      default:
        break;
    }
  };

  // Filter handling removed - filters are now integrated into individual tabs

  const getPageTitle = () => {
    switch (currentView) {
      case 'home':
        return 'Trang chủ';
      case 'bookings':
        return 'Buổi chụp';
      case 'messages':
        return 'Tin nhắn';
      case 'profile':
        return 'Hồ sơ';
      case 'edit-profile':
        return 'Chỉnh sửa hồ sơ';
      default:
        return 'Momentia';
    }
  };

  const getBreadcrumbs = () => {
    switch (currentView) {
      case 'edit-profile':
        return [
          { label: 'Hồ sơ', href: '#' },
          { label: 'Chỉnh sửa' }
        ];
      default:
        return [];
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <CustomerHome onNavigate={setCurrentView} />;
      case 'bookings':
        return <CustomerBookings onNavigate={setCurrentView} />;
      case 'messages':
        return <CustomerChat onBack={() => setCurrentView('home')} />;
      case 'profile':
        return <CustomerProfile onNavigate={setCurrentView} />;
      case 'edit-profile':
        return <CustomerEditProfile onBack={() => setCurrentView('profile')} />;
      default:
        return <CustomerHome onNavigate={setCurrentView} />;
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