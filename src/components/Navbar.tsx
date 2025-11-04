import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';
export default function Navbar() {
  const {
    user,
    logout
  } = useAuth();
  return <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-semibold text-slate-800">
            Fawt Portal
          </h1>
          <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
            {user?.role === 'admin' ? 'Admin' : 'Student'}
          </span>
        </div>
        <div className="flex gap-6">
          {user?.role === 'admin' && (
            <>
              <a href="/admin" className="hover:underline">Admin Dashboard</a>
              <a href="/student" className="hover:underline">Student Dashboard</a>
              <a href="/grouping" className="hover:underline">Grouping</a>
            </>
          )}
          {user?.role === 'student' && (
            <a href="/student" className="hover:underline">Dashboard</a>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-600">{user?.name}</span>
          <button onClick={logout} className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  </nav>;
}