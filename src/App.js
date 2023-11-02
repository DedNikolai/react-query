import React from 'react';
import Router from './components/Router';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
         <Router />
    </AuthProvider>
  );
}

export default App;
