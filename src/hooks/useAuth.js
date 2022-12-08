import { useDispatch, useSelector } from "react-redux";
import alkemyApi from "../api/login";
import { onChecking, onLogin, onLogout } from "../redux/slices/auth.Slice";
import { setUser } from "../redux/slices/user.slice";
import { useTransactions } from "./useTransactions";

export const useAuth = () => {
    const { status, user, errorMsg } = useSelector(state => state.auth);
    const { email, first_name, last_name, id } = useSelector(state => state.user);
    const { Autorizacion } = useTransactions();
    const dispatch = useDispatch();

    const Login = async({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await alkemyApi.post("/auth/login", { email, password });
            localStorage.setItem("token", data.accessToken);
            dispatch(onLogin());
        } catch (error) {
            dispatch(onLogout("Usuario o Contraseña incorrecto"));
        }
    };

    const Register = async({ email, password }) => {
        dispatch(onChecking());
        try {
         await alkemyApi.post("/users", { email, password });
         dispatch(onLogout());
         window.location = "/";
        } catch (error) {
            dispatch(onLogout());
        }
    };

    const verifToken = () => {
        const token = localStorage.getItem("token");
        dispatch(onLogin());
        if (!token) {
            dispatch(onLogout());
        }
    };

    const Logout = () => {
        localStorage.clear();
        dispatch(onLogout());
    };

    const infoUsuario = async () => {
        try {
          const resp = await alkemyApi.get(
            "/auth/me",
            Autorizacion,
            Autorizacion
          );
          dispatch(setUser(resp));
        } catch (error) {
          console.log("no anduvo");
        }
      };

    return {

        status,
        user,
        errorMsg,
        email,
        first_name,
        last_name,
        id,
        Login,
        verifToken,
        Logout,
        Register,
        infoUsuario

    };
};
