import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authRef } from "../../firebaseConfig";

export const AuthContext = createContext(null)

function AuthProvider({children}) {
  const [user, setUser] = useState(null)

  const createUserWithEP = (email, password) => {
    return createUserWithEmailAndPassword(authRef, email, password)
  }

  return (  
    <AuthContext.Provider value={ {user, setUser, createUserWithEP} }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;