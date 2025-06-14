// src/services/authService.ts
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export async function login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao fazer login");
  }
}
