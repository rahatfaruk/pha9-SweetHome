import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { authRef } from "../../firebaseConfig";

export const AuthContext = createContext(null)

function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUserWithEP = async (email, password, displayName, photoURL) => {
    setLoading(true)
    try {
      const credential = await createUserWithEmailAndPassword(authRef, email, password)
      await updateProfile(credential.user, {displayName, photoURL})
      setUser(credential.user)  
    } catch (error) {
      throw Error(error.message)      
    }
    setLoading(false)
  }
  
  const signInWithEP = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(authRef, email, password)
  }
  
  const signInWithGoogle = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()
    return signInWithPopup(authRef, provider)
  }
  
  const signInWithGithub = () => {
    setLoading(true)
    const provider = new GithubAuthProvider()
    return signInWithPopup(authRef, provider)
  }

  const logout = () => {
    setLoading(true)
    return signOut(authRef)
  }

  const updateProfileInfo = (displayName, photoURL) => {
    return updateProfile(user, {displayName, photoURL})
  }

  // update user onload && observe user
  useEffect(() => {
    const unsub = onAuthStateChanged(authRef, currUser => {
      if (currUser && !currUser.displayName) {
        return 
      }
      else if (currUser) {
        setUser(currUser)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    // cleanup
    return () => {
      unsub()
    }
  }, [])

  return (  
    <AuthContext.Provider value={ {user, setUser, createUserWithEP, logout, signInWithEP, signInWithGoogle, signInWithGithub, updateProfileInfo, loading} }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;