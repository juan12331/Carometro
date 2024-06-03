import { useState } from "react";

function Cadastro_aluno() {
    const [imgtoinp, setImgtoinp] = useState('');
    const [cpf, setCpf] = useState('');

    const ImgChange = (evt) => {
        const file = evt.target.files[0];
        if (file) {
            setImgtoinp(URL.createObjectURL(file));
        }
    };

    const formatCpf = (cpf) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    const handleCpfChange = (e) => {
        setCpf(formatCpf(e.target.value));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/home';
    }

    return (
        <div className='m-2'>
            <a href="/dashboard" className="flex items-center m-4">
                <box-icon name='arrow-back'></box-icon> <span className="ml-2">Voltar</span>
            </a>

            <div className="text-center mt-10">
                <h1 className="text-3xl font-semibold">Cadastro do aluno</h1>
            </div>

            <form className="w-full max-w-3xl m-auto mt-10" onSubmit={onSubmit}>  
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

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder='Digite sua senha' className="border mb-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmar-senha">Confirmar Senha</label>
                        <input type="password" id="confirmar-senha" placeholder='Confirme sua senha' className="border mb-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                </div>

                <label htmlFor="dropzone-file">Imagem do aluno</label>
                <div className="relative flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click para enviar</span> ou arraste e solte aqui</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG</p>
                        </div>
                        <input id="dropzone-file" onChange={ImgChange} type="file" className="hidden" />
                    </label>
                    <div className="absolute top-5 left-5 mt-2 text-center">
                        {imgtoinp && <img src={imgtoinp} alt="preview" style={{ objectFit: 'scale-down', width: '100px', height: '100px' }} />}
                    </div>
                </div>


                <div className="w-full mt-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded w-full">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Cadastro_aluno;