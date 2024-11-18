import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Inicializando o 'user' com null

  const login = async (token) => {
    try {
        const decodedToken = jwtDecode(token); // Decodifica o token
        console.log(decodedToken);
        
        if (decodedToken.userType === 0) {
            console.log(decodedToken.userType + " - VALIDOU O USER");
            setUser({
                token,
                idUser: decodedToken.idUser,
                userType: decodedToken.userType
            });
            await AsyncStorage.setItem("authToken", token);

        } else {
            console.log(decodedToken.userType + " - VALIDOU A EMPRESA");
            setUser({
                token,
                idCollector: decodedToken.idCollector,
                userType: decodedToken.userType
            });
            await AsyncStorage.setItem("authToken", token);
        }

    } catch (error) {
        console.error("Token inválido:", error);
    }
};

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);