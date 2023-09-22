import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useForm } from 'react-hook-form'

const Auth = () => {

    const { register, handleSubmit } = useForm();
    const auth = getAuth();

    const submit = async (data) => {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                console.log(userCredential) 
                // const user = userCredential.user;
                // ...
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='auth-form'>
            <form className='auth-formulario' onSubmit={handleSubmit(submit)} >
                <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
                <input type="password" placeholder='Ingresá tu contraseña' {...register("password")} />
                <button className='login' type="submit">login</button>
            </form>
        </div>
    )
}

export default Auth