import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "./config";


export async function cadastrarUsuario(nome, email, senha){
   const {user} =  await createUserWithEmailAndPassword(auth, email, senha);
   await updateProfile(user, {displayName: nome}); //* salvando os dados atraves da funcção update do firebase
}

export async function entrarGoogle(){
    const provider = new GoogleAuthProvider()    //*cria provedor 
    await signInWithPopup(auth, provider);
}

export async function loginUsuario(email,senha){
    await signInWithEmailAndPassword(auth, email, senha)
}
