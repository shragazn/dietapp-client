import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { WORKOUTS } from "./he";
import { WORKOUT_PLANS } from "./he/workout-plans";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "exercise name": "שם התרגיל",
        exercise: "תרגיל",
        exercises: "תרגילים",
        set: "סט",
        sets: "סטים",
        rep: "חזרה",
        reps: "חזרות",
        weight: "משקל",
        kg: 'ק"ג',
        sec: "שניות",
        min: "דקות",
        hour: "שעות",
        day: "ימים",
        week: "שבועות",
        done: "בוצע",
        add: "הוסף",
        workouts: WORKOUTS,
        workoutPlans: WORKOUT_PLANS,
      },
    },
  },
  lng: "he",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
