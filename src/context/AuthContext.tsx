// // import React, { useState, createContext, useContext } from 'react';
// // export interface User {
// //   trNumber: string;
// //   name: string;
// //   role: 'student' | 'admin';
// // }
// // interface AuthContextType {
// //   user: User | null;
// //   login: (trNumber: string) => void;
// //   logout: () => void;
// // }
// // const AuthContext = createContext<AuthContextType | undefined>(undefined);
// // export function AuthProvider({
// //   children
// // }: {
// //   children: ReactNode;
// // }) {
// //   const [user, setUser] = useState<User | null>(null);
// //   const login = (trNumber: string) => {
// //     // Mock authentication logic
// //     if (trNumber.toLowerCase() === 'admin') {
// //       setUser({
// //         trNumber,
// //         name: 'Admin User',
// //         role: 'admin'
// //       });
// //     } else {
// //       setUser({
// //         trNumber,
// //         name: `Student ${trNumber}`,
// //         role: 'student'
// //       });
// //     }
// //   };
// //   const logout = () => {
// //     setUser(null);
// //   };
// //   return <AuthContext.Provider value={{
// //     user,
// //     login,
// //     logout
// //   }}>
// //       {children}
// //     </AuthContext.Provider>;
// // }
// // export function useAuth() {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error('useAuth must be used within AuthProvider');
// //   }
// //   return context;
// // }
// // context/AuthContext.tsx
// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (trNumber) => {
//     try {
//       const res = await axios.post('/api/login/', { tr_number: trNumber });
//       setUser(res.data);
//       // Redirect based on role
//       if (res.data.role === 'admin') {
//         window.location.href = '/admin';
//       } else {
//         window.location.href = '/student';
//       }
//     } catch (err) {
//       alert('Invalid TR number');
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';
import axios from 'axios';

import { User } from "../types/index";

interface AuthContextType {
  user: User | null;
  login: (trNumber: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('fawt_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = async (trNumber: string) => {
    const res = await axios.post('/api/login/', { tr_number: trNumber });
    const userData: User = {
      id: res.data.id,
      trNumber,
      name: res.data.name,
      role: res.data.role
    };
    setUser(userData);
    localStorage.setItem('fawt_user', JSON.stringify(userData));

    // Optional: redirect logic here or in component
    if (userData.role === 'admin') {
      window.location.href = '/admin';
    } else {
      window.location.href = '/student';
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fawt_user');
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
