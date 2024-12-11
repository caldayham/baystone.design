// Home.tsx
import React from "react";
import { EmailCaptureForm, SocialLinks } from "@/components";
import styles from "./Page.module.css";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
      {/* Background Image */}
      <div className={styles.backgroundContainer}></div>

      {/* Centered Heading and Slogan */}
      <div className="flex flex-col items-center w-full px-4 mb-6 text-center">
        <h1 className="text-4xl font-bold whitespace-nowrap md:text-5xl">
          BAYSTONE DESIGN
        </h1>
        <p className="mt-2 text-base">
          Quality outdoor utility and ambiance.
        </p>
        <p className="mt-2 text-base">
          Thoughtfully designed, built to last.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-xl mt-4 text-center">
        <EmailCaptureForm />
      </div>
    </main>
  );
}