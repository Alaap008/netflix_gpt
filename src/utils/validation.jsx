import React from 'react'

export const checkEmailPasswordValidation = (email,password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailRegex)
    return "Please enter a valid email";
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  if (!passwordRegex)
    return "Please enter a valid password";
  return null;

}
