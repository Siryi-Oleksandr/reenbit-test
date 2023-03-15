import { useState } from 'react';
import authContext from './authContext';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
}
