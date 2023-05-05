import { useAuth0 } from "@auth0/auth0-react";

import logo from "./Kukenan_Roraima_GS.jpg";
import "./App.css";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />

            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;

// este login lo ree con auth0 = https://manage.auth0.com/dashboard/us/dev-vak1ns36mr6m850i/onboarding
// user: elifredmason@gmail.com
// pass: Roraima2003*

// ---- dependencias -----
// npm install @auth0/auth0-react
