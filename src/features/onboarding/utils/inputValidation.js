

const inputValidation = (formData) => {

    const newErrors = {};
    
    // BUSINESS NAME
    if("businessName" in formData){
        const businessName = formData.businessName?.trim();
        const businessNameRegex = /^[A-Za-z0-9\s&'.-]{2,}$/;
        if (!businessName) {
            newErrors.businessName = "Business Name is required";
            } else if (!businessNameRegex.test(businessName)) {
            newErrors.businessName = "Enter a Business Name";
        }
    }

     
    // COUNTRY NAME
    if("country" in formData){
        if (!formData.country || !formData.country.trim()) {
            newErrors.country = "Country must be selected";  
        }
    }

    if("terms" in formData){
        if(!formData.terms){
            newErrors.terms = "Accept the Terms and Policy"
        }
    }

    // NAME
    if("name" in formData){
        const name = formData.name?.trim();
        const fullNameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        if (!name) {
        newErrors.name = "Name is required";
        } else if (name.length < 2) {
        newErrors.name = "Name must be at least 2 characters";
        } else if(!fullNameRegex.test(name)){
            newErrors.name = "Enter a valid name"
        }
    }

    // EMAIL
    if("email" in formData){
        const email = formData.email?.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
        newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
        newErrors.email = "Enter a valid email";
        }
    }

    // PASSWORD
    if("password" in formData){
        const password = formData.password;

        if (!password) {
        newErrors.password = "Password is required";
        } else if (password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(password)) {
        newErrors.password = "Must include at least one uppercase letter";
        } else if (!/[a-z]/.test(password)) {
        newErrors.password = "Must include at least one lowercase letter";
        } else if (!/[0-9]/.test(password)) {
        newErrors.password = "Must include at least one number";
        }
    }

    if("confirmPassword" in formData){   
        const confirmPassword = formData.confirmPassword;

        if (!confirmPassword) {
        newErrors.confirmPassword = "Password is required";
        } else if (confirmPassword.length < 8) {
        newErrors.confirmPassword = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(confirmPassword)) {
        newErrors.confirmPassword= "Must include at least one uppercase letter";
        } else if (!/[a-z]/.test(confirmPassword)) {
        newErrors.confirmPassword = "Must include at least one lowercase letter";
        } else if (!/[0-9]/.test(confirmPassword)) {
        newErrors.confirmPassword = "Must include at least one number";
        }
    }

    if("password" in formData && "confirmPassword" in formData ){
        const password = formData.password;
        const confirmPassword = formData.confirmPassword;

        if(!(password === confirmPassword)) newErrors.matchPassword = "Passwords do not match";

    }

    // ACCOUNT IDENTIFIER
   if ("accountIdentifier" in formData) {
    const identifier = formData.accountIdentifier?.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Simple international/local phone validation
    const phoneRegex = /^[+]?[0-9]{10,15}$/;

    if (!identifier) {
        newErrors.accountIdentifier = "Phone number or email is required";
    } else if (
        !emailRegex.test(identifier) &&
        !phoneRegex.test(identifier)
    ) {
        newErrors.accountIdentifier = "Enter a valid phone number or email";
    }
}
    return newErrors;
    
}

export default inputValidation;