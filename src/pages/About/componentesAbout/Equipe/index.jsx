import './equipe.css'

export default function Equipe() {
    const time = [
        { numero: 1, nome: "Pedro Bezerra", func: "Coord. de Inovaçao" },
        { numero: 2, nome: "Carol Vieira", func: "UX/UI Designer" },
        { numero: 3, nome: "Rebeca Liberal", func: "UX/UI Designer" },
        { numero: 4, nome: "Caio Lopes", func: "UX/UI Designer" },
        { numero: 5, nome: "Emilia Revoredo", func: "UX/UI Designer" },
        { numero: 6, nome: "Gabriel Barbosa", func: "Front-End Dev" },
        { numero: 7, nome: "Jeff Marcelo", func: "Front-End Dev" },
        { numero: 7, nome: "João Dornelas", func: "Back-End Dev" },
        { numero: 7, nome: "Vinicius Pereira", func: "Full-Stack Dev" },
        { numero: 7, nome: "Breno Orapacen", func: "Full-Stack Dev" },
        { numero: 7, nome: "Victoria Xavier", func: "Full-Stack Dev" },



    ]
    return (
        <section className='sec-equipe'>
            <div className='grid-global'>
                <div className='equipe'>
                    <ul>
                        {
                            time.map((pessoa) => (
                                <li>
                                    <span>{pessoa.numero}</span>
                                    <div className='equipe-nome'>
                                        <span>{pessoa.nome}</span>
                                        <span>{pessoa.func}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </div>


            </div>
            <div className='media-container'></div>
        </section>
    )
}

