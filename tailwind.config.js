/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // tailwind.config.js
  theme: {
    extend: {
      maxWidth: {
        'custom': '700px', // Add your custom width here
      },
      colors: {
        primary: {
          light: '#6C63FF',   // light shade of primary color
          DEFAULT: '#4A47F5', // main primary color
          dark: '#3B3BCC',    // dark shade of primary color
        },
        secondary: {
          light: '#FF647F',
          DEFAULT: '#FF3B60',
          dark: '#CC304E',
        },
        success: '#4CAF50',
        danger: '#FF5252',
        warning: '#FFC107',
        info: '#2196F3',
        primary: "#FFFFFF",
        primaryDarkColor: "black",
        darkBlue: "#002651",
        contrastColorLight: "#00B29A",
        contrastColorDark: "#003d37",
        green: "#044c38",
        highlightColor: "#f4ca0f",
        appRedColor: "red",
        textBlackColor: "black",
        textGreenColor: "#044c38",
        textWhiteColor: "white",
        textHighlightColor: "#f4ca0f",
        gradient: ["#00B29A", "#00B29A", "#003d37"],
        gray: "#83829A",
        gray2: "#C1C0C8",
        white: "#F3F4F8",
        lightWhite: "#FAFAFC",


        lightTheme: "light",
        lightColor: "white",
        lightBackground: "white",
        lightSplashScreenH1: "#47A67E",
        lightSplashScreenH2: "#0C5234",
        lightSplashScreenParagraph: "#58595B",
        lightSplashScreenHr: "rgba(12, 82, 52, .5)",
        lightLoginHeading: "#0C5234",
        lightInputContainerColor: "#F1F1F1",
        lightGradient: ["#00B29A", "#00B29A", "#003d37"],
        lightInActiveTintColor: "#003d37",
        lightTabBarIconColor: "#003d37",
        lightTabBarBackgroundColor: "white",
        lightHighlightColor: "#f4ca0f",
        lightIconColor: "#FAFAFC",
        lightTextGreenColor: "#044c38",
        lightBorderColor: "white",
        lightInvertColors: "white",
        lightInvertBgColor: "white",
        lightTextInvertColor: "black",
        lightToolTipBackground: "rgba(50, 50, 50, 0.8)",
        lightSnackBarBackground: "rgba(0, 0, 0, .8)",
        lightSettingsTextColor: "#044c38",
        lightLogoutIconColor: "red",
        lightSettingsModalBgColor: "white",
        lightIconColorProfileScreen: "#044c38",
        lightRedColor: "red",
        lightyYearDropDownBgColor: "#00B29A",
        lightStatusBar: "light",


        darkTheme: "dark",
        darkColor: "white",
        background: "#0D0D0D",
        darkSplashScreenH1: "#46A17A",
        darkSplashScreenH2: "#46A17A",
        darkSplashScreenParagraph: "#FFFFFF",
        darkSplashScreenHr: "rgba(12, 82, 52, 1)",
        darkLoginHeading: "#46A17A",
        darkInputContainerColor: "#242424",
        darkGradient: ["#044c38", "#044c38", "#003d37"],
        darkInActiveTintColor: "white",
        darkTabBarIconColor: "white",
        darkTabBarBackgroundColor: "black",
        darkHighlightColor: "#f4ca0f",
        darkIconColor: "#FAFAFC",
        darkTextGreenColor: "#044c38",
        darkInvertColors: "black",
        darkInvertBgColor: "black",
        darkTextInvertColor: "white",
        darkBorderColor: "#00B29A",
        darkToolTipBackground: "rgba(255, 255, 255, 0.8)",
        darkSnackBarBackground: "rgba(255, 255, 255, .8)",
        darkSettingsTextColor: "white",
        darkLogoutIconColor: "red",
        darkSettingsModalBgColor: "#3b3b3b",
        darkIconColorProfileScreen: "white",
        darkRedColor: "red",
        darkYearDropDownBgColor: "#003d37",
        darkStatusBar: "light",

        loginText: "#58595B",
        placeholderTextColor: "#58595B",
        inputColor: "#58595B",
        buttonColor: "#52BF95"
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

