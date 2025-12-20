import { X, User, Mail, MapPin, Phone, CreditCard, Package, LogOut, Settings, Heart, Save, Edit2, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favoritesCount: number;
  onNavigateToFavorites: () => void;
}

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export function ProfileDrawer({ isOpen, onClose, favoritesCount, onNavigateToFavorites }: ProfileDrawerProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  });
  const [tempProfileData, setTempProfileData] = useState<ProfileData>(profileData);

  const handleEdit = () => {
    setTempProfileData(profileData);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData(tempProfileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfileData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setTempProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      alert('Signed out successfully!');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white z-50 shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl text-gray-900">My Profile</h2>
              <p className="text-sm text-gray-600 mt-1">Account settings & information</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#086E0A]/10 rounded-lg transition-colors"
              style={{ color: '#086E0A' }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Content */}
          <div className="flex-1 overflow-y-auto">
            {activeSection === null ? (
              <>
                {/* Profile Header */}
                <div className="p-6 bg-gradient-to-br from-[#086E0A]/10 to-[#086E0A]/5 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#086E0A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 font-semibold">
                        {profileData.firstName} {profileData.lastName}
                      </h3>
                      <p className="text-sm text-gray-600">{profileData.email}</p>
                      <p className="text-xs text-gray-500 mt-1">Member since 2024</p>
                    </div>
                    <button
                      onClick={handleEdit}
                      className="p-2 hover:bg-[#086E0A]/10 rounded-lg transition-colors"
                      style={{ color: '#086E0A' }}
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Quick Info Display */}
                {isEditing ? (
                  <div className="p-6 space-y-4 border-b border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          value={tempProfileData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          value={tempProfileData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={tempProfileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex-1 px-4 py-2 bg-[#086E0A] text-white rounded-lg hover:bg-[#065408] transition-colors flex items-center justify-center gap-2"
                        style={{ backgroundColor: '#086E0A' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#065408'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#086E0A'}
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 border border-[#086E0A] text-[#086E0A] rounded-lg hover:bg-[#086E0A]/10 transition-colors"
                        style={{ borderColor: '#086E0A', color: '#086E0A' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(8, 110, 10, 0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 space-y-4 border-b border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900">{profileData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-900">
                        {profileData.address}, {profileData.city}, {profileData.state} {profileData.zipCode}
                      </p>
                    </div>
                  </div>
                )}

                {/* Menu Items */}
                <div className="p-4 space-y-2">
                  {/* Account Section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
                      Account
                    </h4>
                    <div className="space-y-1">
                      <button 
                        onClick={() => setActiveSection('personal')}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <User className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">Personal Information</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('email')}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <Mail className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">Email & Notifications</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('address')}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <MapPin className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">Addresses</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('phone')}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <Phone className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">Phone Number</span>
                      </button>
                    </div>
                  </div>

                  {/* Orders Section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
                      Orders
                    </h4>
                    <div className="space-y-1">
                      <button 
                        onClick={() => setActiveSection('orders')}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <Package className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">Order History</span>
                        <span className="ml-auto text-sm text-gray-500">12</span>
                      </button>
                      <button 
                        onClick={() => {
                          onNavigateToFavorites();
                          onClose();
                        }}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <Heart className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">Wishlist</span>
                        <span className="ml-auto text-sm text-gray-500">{favoritesCount}</span>
                      </button>
                    </div>
                  </div>

                  {/* Payment Section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
                      Payment
                    </h4>
                    <div className="space-y-1">
                      <button 
                        onClick={() => setActiveSection('payment')}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <CreditCard className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">Payment Methods</span>
                      </button>
                    </div>
                  </div>

                  {/* Settings Section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
                      Settings
                    </h4>
                    <div className="space-y-1">
                      <button 
                        onClick={() => setActiveSection('preferences')}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <Settings className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">Preferences</span>
                      </button>
                    </div>
                  </div>

                  {/* Logout */}
                  <div className="pt-4 border-t border-gray-200">
                    <button 
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-red-50 transition-colors text-left"
                    >
                      <LogOut className="w-5 h-5 text-red-500" />
                      <span className="text-red-600 font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-6">
                <button
                  onClick={() => setActiveSection(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                {activeSection === 'personal' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          value={tempProfileData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          value={tempProfileData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          handleSave();
                          setActiveSection(null);
                        }}
                        className="flex-1 px-4 py-2 bg-[#086E0A] text-white rounded-lg hover:bg-[#065408] transition-colors"
                        style={{ backgroundColor: '#086E0A' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#065408'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#086E0A'}
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => {
                          handleCancel();
                          setActiveSection(null);
                        }}
                        className="px-4 py-2 border border-[#086E0A] text-[#086E0A] rounded-lg hover:bg-[#086E0A]/10 transition-colors"
                        style={{ borderColor: '#086E0A', color: '#086E0A' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(8, 110, 10, 0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {activeSection === 'email' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email & Notifications</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={tempProfileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm text-gray-700">Email notifications for new orders</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm text-gray-700">Promotional emails</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">Newsletter subscription</span>
                      </label>
                    </div>
                    <button
                      onClick={() => {
                        handleSave();
                        setActiveSection(null);
                      }}
                      className="w-full px-4 py-2 bg-[#086E0A] text-white rounded-lg hover:bg-[#065408] transition-colors"
                      style={{ backgroundColor: '#086E0A' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#065408'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#086E0A'}
                    >
                      Save Changes
                    </button>
                  </div>
                )}

                {activeSection === 'address' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Addresses</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                      <input
                        type="text"
                        value={tempProfileData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                          type="text"
                          value={tempProfileData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <input
                          type="text"
                          value={tempProfileData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                        <input
                          type="text"
                          value={tempProfileData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          value={tempProfileData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleSave();
                        setActiveSection(null);
                      }}
                      className="w-full px-4 py-2 bg-[#086E0A] text-white rounded-lg hover:bg-[#065408] transition-colors"
                      style={{ backgroundColor: '#086E0A' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#065408'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#086E0A'}
                    >
                      Save Changes
                    </button>
                  </div>
                )}

                {activeSection === 'phone' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone Number</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={tempProfileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]"
                      />
                    </div>
                    <button
                      onClick={() => {
                        handleSave();
                        setActiveSection(null);
                      }}
                      className="w-full px-4 py-2 bg-[#086E0A] text-white rounded-lg hover:bg-[#065408] transition-colors"
                      style={{ backgroundColor: '#086E0A' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#065408'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#086E0A'}
                    >
                      Save Changes
                    </button>
                  </div>
                )}

                {activeSection === 'orders' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Order History</h3>
                    <div className="text-center py-8 text-gray-500">
                      <Package className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                      <p>No orders yet</p>
                      <p className="text-sm mt-1">Your order history will appear here</p>
                    </div>
                  </div>
                )}

                {activeSection === 'payment' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
                    <div className="text-center py-8 text-gray-500">
                      <CreditCard className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                      <p>No payment methods saved</p>
                      <p className="text-sm mt-1">Add a payment method to checkout faster</p>
                    </div>
                    <button className="w-full px-4 py-2 border border-[#086E0A] text-[#086E0A] rounded-lg hover:bg-[#086E0A]/10 transition-colors">
                      Add Payment Method
                    </button>
                  </div>
                )}

                {activeSection === 'preferences' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086E0A]">
                          <option>USD ($)</option>
                          <option>EUR (€)</option>
                          <option>GBP (£)</option>
                        </select>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-[#086E0A] text-white rounded-lg hover:bg-[#065408] transition-colors">
                      Save Preferences
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

