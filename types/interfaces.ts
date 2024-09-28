export interface SignUpFormError {
    emailError: string;
    passError: string;
    mainError: string;
}

export interface SignInFormError {
    res: boolean;
    message: string;
}

export interface SplashScreenContextProps {
    showSplashScreen: boolean;
    setShowSplashScreen: (show: boolean) => void;
}

export interface SplashScreenProps {
    text? : string;
}