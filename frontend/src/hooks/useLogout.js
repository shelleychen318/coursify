import { useAuthContext } from "./useAuthContext";
import { useCoursesContext } from "./useCoursesContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: coursesDispatch } = useCoursesContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });

    // clear global courses state on logout
    coursesDispatch({ type: "SET_COURSES", paylod: null });
  };

  return { logout };
};
