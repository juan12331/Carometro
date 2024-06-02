import React, { useState } from 'react';
import "./Login.css"

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='flex h-screen'>
            <div className='w-full md:w-1/2 max-w-lg m-auto'>
                <div className="header flex flex-col items-center mb-10">
                    <div className="logo mb-5">
                        <img src="src/assets/imgs/logo.png" alt="Logo" />
                    </div>
                    <div className="title">
                        <h1 className='text-4xl font-semibold'>Carômetro</h1>
                    </div>
                </div>

                <div className="login bg-white shadow-md border rounded p-9 mb-3">
                    <div className="flex flex-col">
                        <label className='my-3' htmlFor="usuario">Usuário</label>
                        <input className='border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' type="text" id="usuario" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className='my-3' htmlFor="senha">Senha</label>
                        <input className='border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' type="password" id="senha" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="remember my-3 flex items-center">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="remember" className='ml-2'>Lembrar de mim</label>
                    </div>
                    <div className='w-full mt-5'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded w-full'>Entrar</button>
                    </div>
                </div>

                <div className="register">
                    <p>Não possui uma conta? <a href="/cadastro" className='text-blue-500 hover:text-blue-700 underline'>Clique aqui</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;