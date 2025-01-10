//import React, { useState } from 'react';
//import LoginPage from './Components/LoginPage'; // Make sure the path is correct
//import ResetInitial from './Components/ResetInitial'; // Make sure the path is correct
//import PasswordReset from './Components/PasswordReset';
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
 /* const [showResetPassword, setShowResetPassword] = useState(false);

  // Function to toggle between Login and ResetPassword components
  const handleForgotPassword = () => {
    setShowResetPassword(true); // Show ResetPassword component
  };

  const handleBackToLogin = () => {
    setShowResetPassword(false); // Show Login component again
  };

  return (
    <div className="App">
      {!showResetPassword ? (
        // Render Login component
        <div>
          <LoginPage />
          <button onClick={handleForgotPassword}>Forgot Password?</button>
        </div>
      ) : (
        // Render ResetPassword component
        <div>
          <ResetPassword />
          <button onClick={handleBackToLogin}>Back to Login</button>
        </div>
      )}
    </div>
  );*/
return(
 //<LoginPage />
  //<PasswordReset />
  //<ResetInitial />
  <Sidebar />

 
)
};
export default App;


