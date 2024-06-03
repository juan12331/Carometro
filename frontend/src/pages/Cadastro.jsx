import { useState } from 'react';
import './cadastro.css';

function Cadastro() {
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const formatCpf = (cpf) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");


    const handleCpfChange = (e) => {
        setCpf(formatCpf(e.target.value));
    }

    return (
        <div className='m-2'>
            <a href="/" className="flex items-center m-4">
                <box-icon name='arrow-back'></box-icon> <span className="ml-2">Voltar</span>
            </a>

            <div className="text-center mt-10">
                <h1 className="text-3xl font-semibold">Cadastro do professor</h1>
            </div>

            <form className="w-full max-w-3xl m-auto mt-10">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder='Digite seu nome' className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder='Digite seu email' className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" onChange={handleCpfChange} id="cpf" maxLength={14} value={cpf} placeholder={formatCpf('00000000000')} className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" id="telefone" maxLength={16} placeholder="(00) 00000-0000" className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder='Digite sua senha' className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmar-senha">Confirmar Senha</label>
                        <input type="password" id="confirmar-senha" placeholder='Confirme sua senha' className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                </div>
                <div className="w-full mt-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded w-full">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;