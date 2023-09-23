import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Button, ButtonGoogle } from "components/button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/auth-slice";

const schema = yup.object({
    email: yup
        .string()
        .email("Invalid email address")
        .required("Please enter your email address"),
    password: yup
        .string()
        .min(8, "Your password must be at least 8 character or greater")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
                message:
                    "Your password must have at least with one lowercase, uppercase, digit and special character",
            }
        )
        .required("This field is required"),
});

const SignInPage = () => {
    const {
        handleSubmit,
        control,
        formState: { isValid, errors },
    } = useForm({ resolver: yupResolver(schema) });
    const dispatch = useDispatch();
    const handleSignIn = (values) => {
        if (!isValid) return;
        dispatch(authLogin(values));
    };
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (user && user.id) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();
    return (
        <LayoutAuthentication heading="Welcome Back!">
            <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
                Don't have an account?{" "}
                <Link
                    to={"/register"}
                    className="font-medium underline text-primary"
                >
                    Sign up
                </Link>
            </p>
            <ButtonGoogle text="Sign in with google"></ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <FormGroup>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        control={control}
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        error={errors.email?.message}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                        control={control}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create an password"
                        error={errors.password?.message}
                    >
                        <IconEyeToggle
                            open={showPassword}
                            onClick={handleTogglePassword}
                        ></IconEyeToggle>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <div className="text-right">
                        <span className="inline-block text-sm font-medium cursor-pointer text-primary">
                            Forgot password
                        </span>
                    </div>
                </FormGroup>
                <Button kind="primary" className="w-full" type="submit">
                    Sign In
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignInPage;
