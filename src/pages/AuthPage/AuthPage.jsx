import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import React, { useState } from "react";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(null);
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowLogin(true)}>Log In</button>
      <button onClick={() => setShowLogin(false)}>Sign Up</button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
