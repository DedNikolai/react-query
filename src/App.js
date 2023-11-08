import React from 'react';
import Router from './components/Router';
import AuthProvider from './components/AuthProvider';
import Toastr from './components/Toastr';

function App() {
  return (
    <AuthProvider>
         <Router />
         <Toastr />
    </AuthProvider>
  );
}

export default App;
