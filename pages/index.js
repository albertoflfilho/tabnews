import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <header className="w-full flex justify-between items-center py-6 max-w-5xl">
        <div className="text-2xl font-bold text-purple-400">QA</div>
        <nav className="space-x-6 text-gray-300">
          <a href="#home" className="text-purple-400">Home</a>
        </nav>
      </header>
      
      <main className="text-center mt-20">
        <h1 className="text-5xl font-bold">Alberto Lacerda</h1>
        <p className="text-xl text-gray-400 mt-2">Quality Assurance Engineer</p>
        <Button className="mt-6 border border-purple-400 text-purple-400 px-6 py-2 rounded-lg hover:bg-purple-500 hover:text-white">
          Download CV
        </Button>
      </main>

      <div className="absolute bottom-10 right-10 text-purple-400">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 8H9L12 2Z" fill="currentColor"/>
          <path d="M12 22L9 16H15L12 22Z" fill="currentColor"/>
          <path d="M2 12L8 15V9L2 12Z" fill="currentColor"/>
          <path d="M22 12L16 9V15L22 12Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}
