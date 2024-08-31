import React from "react";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import { useLanguage } from "./../context/language-context";
import { contactData } from "./../assets/lib/data";

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      <section
        id="contact"
        className="contact-section p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black"
      >
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="mb-8">
            <img
              src="/src/assets/img/me.jpg"
              alt="Me"
              className="w-48 h-48 rounded-full shadow-lg mx-auto"
            />
          </div>
          <h1 className="text-6xl font-extrabold mb-12 text-lightblue drop-shadow-lg">
            {language === "BG" ? contactData.title : contactData.title_EN}
          </h1>
          <div className="contact-info flex flex-col items-center mb-12">
            <p className="text-2xl mb-6 text-white drop-shadow-md flex items-center justify-center">
              <FaEnvelope className="text-4xl mr-2" /> {}
              {language === "BG"
                ? contactData.email
                : contactData.email_EN}:{" "}
              <span className="text-lightblue-300 ml-2">
                galchev98@gmail.com
              </span>
            </p>
            <a
              href="src/assets/resume/Stoyan Resume.pdf"
              download
              className="text-2xl text-yellow-300 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
            >
              <FaDownload className="text-4xl mr-2" /> {}
              {language === "BG"
                ? contactData.downloadResume
                : contactData.downloadResume_EN}
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
