function Homepage() {

    const students = [
        { id: 1, name: 'João', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 2, name: 'Maria', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 3, name: 'Pedro', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 4, name: 'Ana', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 455, name: 'Ana', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 45, name: 'Ana', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 432, name: 'Ana', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 43, name: 'Ana', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 42, name: 'Ana', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 41, name: 'Ana', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
        { id: 444, name: 'Ana', image: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg' },
    ];

    return (
        <div>
            <nav className="fixed border-b top-0 z-50 w-full bg-white">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                                <span className="sr-only">Abrir sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="/home" className="flex ms-2 md:me-24">
                                <img src="/src/assets/imgs/logo.png" className="h-8 me-3 bg-white" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div className="logout">
                            <a href="/" className="flex items-center md:hidden">
                                <box-icon name='log-out' color='black' ></box-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col justify-between">
                    <ul className="space-y-2 font-medium">
                        <li className="flex flex-col">
                            <label className="block mb-2 font-medium text-gray-900" htmlFor="turma">Turma</label>
                            <select name="turma" id="turma" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected disabled>Turma</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </li>
                    </ul>
                    <div className="font-medium">
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                            <box-icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" name='log-out' color='black' ></box-icon>
                            <span className="ms-3">Sair</span>
                        </a>
                    </div>
                </div>
            </aside>

            <div className="p-4 sm:ml-64 mt-14">

                <div className="addStudent mb-5 w-full flex justify-end">
                    <a className="flex items-center max-w-max bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/cadastro-aluno">
                        <box-icon name='plus-circle' color='#fff' size='md'></box-icon>
                        Adiconar Aluno
                    </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {students.map((student) => (
                        <a className="relative group hover:shadow-2xl" key={student.id} href={"/aluno/" + student.id}>
                            <div className="h-auto max-w-full rounded-lg" key={student.id}>
                                <img className="h-auto max-w-full rounded-lg w-full" alt="student" src={student.image} />
                            </div>
                            <span className="absolute  pb-10 bottom-0 left-0 right-0 hidden group-hover:block trasition-all duration-300">
                                <p className="text-center text-xl sh font-semibold mt-4">{student.name}</p>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Homepage;