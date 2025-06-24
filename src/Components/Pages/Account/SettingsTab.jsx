import { useState } from "react";
import ChangePasswordModal from "./ChangePasswordModal";
import DeleteAccountModal from "./DeleteAccountModal";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SettingsTab() {
  return (
    <div className="p-2">
      <h2 className="text-2xl p-3 font-bold text-gray-900 dark:text-white">
        Account Settings
      </h2>

      <div className="space-y-8">
        <SecuritySection />
        <DeleteAccountSection />
      </div>

      <ToastContainer />
    </div>
  );
}

function SecuritySection() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div>
      <div className="flex mb-3 items-center shadow-md justify-between space-x-4 bg-gray-50 dark:bg-black/70 rounded-lg p-4">
        <div>
          <h4 className="font-medium text-base text-gray-900 dark:text-white">Password</h4>
        </div>
        <button
          onClick={() => setShowPasswordModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Change Password
        </button>

        <ChangePasswordModal
          show={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
        />
      </div>
    </div>
  );
}

function DeleteAccountSection() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleLogout}
        className="w-full text-left p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-800 transition-colors"
      >
        <h4 className="font-medium text-yellow-900 dark:text-yellow-200">Logout</h4>
        <p className="text-sm text-yellow-700 dark:text-yellow-300">
          Sign out of your account and clear session
        </p>
      </button>

      <button
        onClick={() => setShowDeleteModal(true)}
        className="w-full text-left p-4 bg-red-50 dark:bg-red-900/30 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 transition-colors"
      >
        <h4 className="font-medium text-red-900 dark:text-red-200">Delete Account</h4>
        <p className="text-sm text-red-600 dark:text-red-300">
          Permanently remove your account and all data
        </p>
      </button>

      <DeleteAccountModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      />
    </div>
  );
}
