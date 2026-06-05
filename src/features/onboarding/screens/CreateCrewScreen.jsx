"use client";
import CreateCrewForm from "../components/CreateCrewForm";
import { useState, useEffect, useRef, useMemo } from "react";
import inputValidation from "../utils/inputValidation";
import generateUsernameSuggestions from "../utils/generateUsernameSuggestons";
import { useRouter } from "next/navigation";

export default function CreateCrewScreen() {
    const [usernameSuggestions, setUsernameSuggestions] = useState([]);
    const [usernameError, setUsernameError] = useState("");
    const router = useRouter();
    
    

    const alphaNumericRegex = /^[a-zA-Z0-9_]+$/;
    const characterCountRegex = /^.{3,20}$/;
    const underScoresRegex = /^.*_.*$/;

    const [formData, setFormData] = useState({
        image: null,
        crewName: "",
        username: "",
    });

    const fullName = formData.crewName || "Alex Johnson";

    useEffect(() => {
        setUsernameSuggestions(generateUsernameSuggestions(fullName));
    }, [fullName]);

    const fileInputRef = useRef(null);

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === "file" ? files[0] : value;
        setFormData((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    }  
    
    const conditions = useMemo(
        () => ({
            characterCount: characterCountRegex.test(formData.username),
            alphaNumeric: alphaNumericRegex.test(formData.username),
            underScores: underScoresRegex.test(formData.username),
        }),
        [formData.username],
    );
    
    const usernameRequirement = ["3-20 characters", "Alphanumeric", "Underscores allowed"];
    
        


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors({});

        const validationResult = inputValidation({...formData, name: formData.crewName});
        const conditionChecks = formData.username === "alex_voya" || formData.username === "johnson" || formData.username === "alex";
         
        if(Object.keys(validationResult).length > 0 || conditionChecks){
            
            setFormErrors({
                crewName: validationResult.name ? validationResult.name : "",
                username: conditionChecks ? "This username is already taken" : ""
            }) 
            return;
        }

        router.push("/onboarding/login/crew");
      
    }


    return (
        <div className="w-full bg-[#fcf8f8] md:py-6 min-h-screen flex items-center justify-center">
            <CreateCrewForm
              conditions={conditions}
              usernameRequirement={usernameRequirement}
              usernameSuggestions={usernameSuggestions}
              usernameError={usernameError}
              onSubmit={handleSubmit}
              setUsernameError={setUsernameError}
              fileInputRef={fileInputRef}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
            />
        </div>
    );
}