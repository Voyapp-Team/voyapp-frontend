"use client";
import LoginForm from "../components/LoginForm";

export default function LoginScreen({ accountType}) {

  console.log("ScreenaccountType:", accountType);
  
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-0 sm:p-8 lg:p-12">
      <LoginForm  accountType={accountType} />
    </main>
  );
}
