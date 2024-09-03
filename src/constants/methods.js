//Email Validation handler
const validateEmail = (userEmail) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(userEmail)) {
      return true;
    } else {
      return false;
    }
  };