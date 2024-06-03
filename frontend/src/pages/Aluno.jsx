import { useState } from "react";

function Aluno() {
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const formatCpf = (cpf) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");


    const handleCpfChange = (e) => {
        setCpf(formatCpf(e.target.value));
    }

    return (
        <div className="m-2">
            <a href="/home" className="flex items-center m-4">
                <box-icon name='arrow-back'></box-icon> <span className="ml-2">Voltar</span>
            </a>

            <div className="text-center mt-10 mb-5">
                <h1 className="text-3xl font-semibold">Aluno [nome do aluno]</h1>
            </div>

            <div className="max-w-fit mx-auto">
                <div className="relative">
                    <img className="w-40 h-40 rounded-full mx-auto" src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg" alt="imagem do aluno" />
                    <div className="absolute bottom-0 right-0">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 flex items-center rounded-full">
                            <box-icon name='camera' type='solid' color="white" className="font-bold"></box-icon>
                        </button>
                    </div>
                </div>
            </div>

            <form className="w-full max-w-3xl m-auto mt-10">

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder='Digite seu nome' className="border mb-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder='Digite seu email' className="border mb-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" onChange={handleCpfChange} id="cpf" maxLength={14} value={cpf} placeholder={formatCpf('00000000000')} className="border mb-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" id="telefone" maxLength={16} placeholder="(00) 00000-0000" className="border mb-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                </div>

                <div className="w-full mt-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded w-full">Editar</button>
                </div>

            </form>
        </div>
    );
}

export default Aluno;