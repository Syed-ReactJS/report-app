import { createContext } from "react";
const userSchema = {
  user: {},
  setUser: () => {},
};
const AuthContext = createContext(userSchema);

export default AuthContext;
