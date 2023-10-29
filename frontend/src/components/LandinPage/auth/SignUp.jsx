"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "@/redux/features/useInfoSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/shared/logo.png";
import { Alert } from "@material-tailwind/react";
import IconSuccess from "@/assets/shared/IconAlertSuccess.jsx";
import IconError from "@/assets/shared/IconAlertError";

const SignUp = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const submit = async (data) => {
    try {
      // console.log(data);
      await dispatch(signup(data));
      reset({
        name: "",
        email: "",
        password: "",
      });
      setShowSuccessAlert(true);
      setTimeout(() => {
        push("/login");
        setShowSuccessAlert(false);
      }, 5000);
    } catch (error) {
      setShowErrorAlert(true);
      // console.log( error);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
    }
  };

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  const regextPassword =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}|\\:;"'<>,.?/_₹]{8,}$/;

  return (
    <div className="  min-h-screen bg-mWhite dark:bg-mBlack flex flex-col justify-center items-center">
      <div className=" w-80 text-center ">
        <Image
          width={64}
          height={64}
          src={logo}
          alt="Logo de MiFinanz"
          className="w-16 mx-auto"
        />
        <p className="text-mBlack dark:text-mWhite text-2xl mb-4">MiFinanz</p>
        <h2 className="text-1xl font-bold mb-4 uppercase text-mBlack dark:text-mWhitee text-center ">
          Bienvenido
        </h2>
        {showSuccessAlert && (
          <Alert
            icon={<IconSuccess />}
            className="rounded-none border-l-4  mb-2 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
          >
            Registro Exitoso, se ha enviado un mensaje a la dirección de correo
            eléctronico proporcionada
          </Alert>
        )}
        {showErrorAlert && (
          <Alert
            icon={<IconError />}
            className="rounded-none border-l-4 mb-2 border-red-500 bg-red-100 font-medium text-red-600"
          >
            Error al registrarse
          </Alert>
        )}

        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <input
              placeholder="Name*"
              type="text"
              className={`w-full border rounded border-mBlack dark:border-mWhite p-1 bg-mWhite dark:bg-[#44444C]  text-mBlack dark:text-mWhite ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name", {
                required: "*Este campo es obligatorio",
              })}
            />
            <div className="text-xs text-red-500 mt-1">
              <ErrorMessage errors={errors} name="name" as="span" />
            </div>
          </div>
          <div className="mb-4">
            <input
              placeholder="Email*"
              type="text"
              className={`w-full border rounded border-mBlack dark:border-mWhite p-1 bg-mWhite dark:bg-[#44444C]  text-mBlack dark:text-mWhite ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "*Este campo es obligatorio",
                pattern: {
                  value: regexEmail,
                  message: "Ingrese un correo electrónico valido",
                },
              })}
            />
            <div className="text-xs text-red-500 mt-1">
              <ErrorMessage errors={errors} name="email" as="span" />
            </div>
          </div>
          <div className="mb-4">
            <input
              placeholder="Password*"
              type="password"
              className={`w-full border rounded border-mBlack dark:border-mWhite p-1 bg-mWhite dark:bg-[#44444C]  text-mBlack dark:text-mWhite ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password", {
                required: "*Este campo es obligatorio",
                pattern: {
                  value: regextPassword,
                  message:
                    "La contraseña debe incluir al menos una letra mayúscula y minuscula, un valor numérico y un carácter especial",
                },
                minLength: {
                  value: 8,
                  message: "La longitud mínima requerida es de 8 caracteres",
                },
              })}
            />
            <div className="text-xs text-red-500 mt-1">
              <ErrorMessage errors={errors} name="password" as="span" />
            </div>
          </div>

          <button className="text-mWhite dark:text-mBlack font-bold bg-blue-600 p-1 w-full text-center hover:bg-blue-400">
            Register
          </button>

          <div className="mt-3 text-sm flex justify-around">
            <label className="text-mBlack dark:text-mWhite">
              ¿Ya tienes cuenta?
            </label>
            <span className="text-blue-600 dark:text-mYellow">
              <Link href="/login">Inicia Sesión</Link>
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex-grow h-0.5 bg-mBlack dark:bg-mWhite"></div>
            <span className="px-2 text-mBlack dark:text-mWhite">o</span>
            <div className="flex-grow h-0.5 bg-mBlack dark:bg-mWhite"></div>
          </div>

          <a href="#" className="   inline-block ">
            <Image
              width={448}
              height={200}
              src="/g_button.png"
              alt="Iniciar sesión con Google"
              className="hover:transform hover:scale-105"
            />
          </a>
          <a href="#" className="   inline-block ">
            <Image
              width={448}
              height={200}
              src="/fb_button.png"
              alt="Iniciar sesión con Facebook"
              className="hover:transform hover:scale-105"
            />
          </a>
          <a href="#" className="   inline-block ">
            <Image
              width={448}
              height={448}
              src="/tw_button.png"
              alt="Iniciar sesión con Twitter"
              className="hover:transform hover:scale-105"
            />
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
