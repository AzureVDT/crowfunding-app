import { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App({ children }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user && user.id) {
            const { refresh_token } = getToken();
            dispatch(
                authUpdateUser({
                    user: user,
                    accessToken: refresh_token,
                })
            );
        } else {
            const { refresh_token } = getToken();
            if (refresh_token) {
                dispatch(authRefreshToken(refresh_token));
            } else {
                dispatch(authUpdateUser({}));
                logOut();
            }
        }
    }, [dispatch, user]);
    return <>{children}</>;
}

export default App;
