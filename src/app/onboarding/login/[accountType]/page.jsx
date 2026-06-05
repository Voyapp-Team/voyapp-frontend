import LoginScreen from "@/src/features/onboarding/screens/LoginScreen";

export default async function LoginPage({params}) {
  const resolvedParams = await params;
  return <LoginScreen accountType={resolvedParams.accountType} />;
}