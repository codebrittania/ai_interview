import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs67JiG6NvwFHzHAQvWZUHiu_QeWt31WY", // 🔑 Публичный API-ключ
  authDomain: "aiuhoria.firebaseapp.com", // 🌐 Домен для авторизации (OAuth)
  projectId: "aiuhoria", // 🆔 Уникальный ID твоего проекта
  storageBucket: "aiuhoria.firebasestorage.app", // ☁️ URL хранилища
  messagingSenderId: "573002542253", // 📬 Используется в push-уведомлениях
  appId: "1:573002542253:web:2c13cdbf79d3d450412a24", // 📱 Уникальный ID приложения
  measurementId: "G-SJN5XWPS1T", // 📊 Google Analytics ID (опционально)
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
