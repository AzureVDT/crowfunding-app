import { takeLatest } from "redux-saga/effects";
import handleAuthRegister, {
    handleAuthLogOut,
    handleAuthLogin,
    handleAuthRefreshToken,
} from "./auth-handlers";
import {
    authLogOut,
    authLogin,
    authRefreshToken,
    authRegister,
} from "./auth-slice";
export default function* authSaga() {
    yield takeLatest(authRegister.type, handleAuthRegister);
    yield takeLatest(authLogin.type, handleAuthLogin);
    yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
    yield takeLatest(authLogOut.type, handleAuthLogOut);
}
