"use client";
import Image from "next/image";
import contactImage from "@/assets/landing/contact.png";

const ContactForm = () => {
  const onFormSubmit = () => {
    /* Pendiente */
  };
  return (
    <section
      id="soporte"
      className="min-h-screen flex flex-col items-center justify-center w-full p-5 md:flex-wrap md:grid md:grid-cols-2"
    >
      <h2 className="block text-4xl font-semibold text-mBlack md:hidden dark:text-mWhite">
        Contact
      </h2>
      <figure className="hidden justify-center items-center md:flex">
        <Image
          className="rounded-md w-4/5"
          src={contactImage}
          alt="Contact image"
        />
      </figure>
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col w-4/5 justify-center gap-y-3 dark:text-mBlack"
          onSubmit={onFormSubmit}
        >
          <input
            className="h-14 rounded-md p-4 placeholder-white dark:placeholder-mWhite bg-mLightGray dark:bg-mDarkGray focus:bg-mWhite focus:placeholder-mBlack transition-all "
            name="name"
            required
            maxLength={500}
            placeholder="Nombre*"
          />
          <input
            className="h-14 rounded-md p-4rounded-md  p-4 placeholder-white dark:placeholder-mWhite bg-mLightGray dark:bg-mDarkGray focus:bg-mWhite focus:placeholder-mBlack transition-all "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Email*"
          />
          <textarea
            className="h-52 rounded-md p-4 placeholder-white dark:placeholder-mWhite bg-mLightGray dark:bg-mDarkGray focus:bg-mWhite focus:placeholder-mBlack transition-all "
            name="message"
            placeholder="Mensaje*"
            required
            maxLength={5000}
          />
          <div className="flex w-full justify-center">
            <button className="w-full rounded-md p-4 bg-mBlue text-mBlack font-bold">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
