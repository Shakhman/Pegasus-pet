import { PropsWithChildren, createContext, useMemo } from 'react';
import useLocalStorage from 'use-local-storage';


type AuthContext = {
  isAuth: boolean | null,
  setIsAuth: (val: boolean) => void
}

export const AuthContext = createContext<AuthContext>({ isAuth: null, setIsAuth: () => {} });

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [isAuthLocalStorage, setAuthLocalStorage] = useLocalStorage<AuthContext['isAuth']>('isAuth', null);

  const authData = useMemo(
    () => (
      {
        setIsAuth: (val: boolean) => {
          setAuthLocalStorage(val);
        },
        isAuth: isAuthLocalStorage,
      }),
    [isAuthLocalStorage],
  );

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
}


