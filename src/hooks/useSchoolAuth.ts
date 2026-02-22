import { useState, useEffect, useCallback } from 'react';

const DEMO_EMAIL = 'admin@fairgreen-demo.com';
const DEMO_PASSWORD = 'fairgreen2026';
const SESSION_KEY = 'fairgreen_demo_session';

export function useSchoolAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = sessionStorage.getItem(SESSION_KEY);
    setIsAuthenticated(session === 'true');
    setLoading(false);
  }, []);

  const login = useCallback((email: string, password: string): boolean => {
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, loading, login, logout };
}
