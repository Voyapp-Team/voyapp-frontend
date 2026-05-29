"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import UsernameForm from "../components/UsernameForm";
import OnboardingSplitShell from "../components/common/OnboardingSplitShell";
import generateUsernameSuggestions from "../utils/generateUsernameSuggestons";

export default function UsernameScreen() {
  const alphaNumericRegex = /^[a-zA-Z0-9_]+$/;
  const characterCountRegex = /^.{3,20}$/;
  const underScoresRegex = /^.*_.*$/;
  const fullName = "Alex Johnson";
  const [usernameError, setUsernameError] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const usernameSuggestions = useMemo(() => generateUsernameSuggestions(fullName), [fullName]);

  const conditions = useMemo(
    () => ({
      characterCount: characterCountRegex.test(username),
      alphaNumeric: alphaNumericRegex.test(username),
      underScores: underScoresRegex.test(username),
    }),
    [username],
  );

  const usernameRequirement = ["3-20 characters", "Alphanumeric", "Underscores allowed"];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "alex_voya" || username === "johnson" || username === "alex") {
      setUsernameError("This username is already taken");
      return;
    }
    router.push("/onboarding/login");
  };

  return (
    <OnboardingSplitShell
      imgSrc="/onboarding/username-aside-image.png"
      imgAlt="Person sitting on a bench"
      currentStep={4}
      totalSteps={5}
      shellClassName="lg:min-h-[954px]"
      progressClassName="lg:mt-[54px]"
      contentClassName="mt-14 max-w-[382px]"
      imageClassName="lg:min-h-[954px]"
      backHref="/onboarding/category"
    >
      <UsernameForm
        username={username}
        setUsername={setUsername}
        conditions={conditions}
        usernameRequirement={usernameRequirement}
        usernameSuggestions={usernameSuggestions}
        usernameError={usernameError}
        onSubmit={handleSubmit}
        setUsernameError={setUsernameError}
      />
    </OnboardingSplitShell>
  );
}
