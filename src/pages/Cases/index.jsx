import React from "react";
import './cases.css'

import boxImg from '../../assets/img/cases/boardsLight.png'
import logoCases from '../../assets/img/cases/logo-cases.svg'

import { Link } from "react-router-dom";
import Transition from "../../transition";

const Cases = () => {
    return (
        <div className="grid-global">
            <section className="container-cases">
                <div className="side-menu">
                    <h1>Filtre por: </h1>

                   <ol className="filtros">
                    <li>Todos</li>
                    <li>Site</li>
                    <li>Produto digital</li>
                    <li>Marca</li>
                   </ol>

                   <div className="work-together">
                    <img src={boxImg} alt="caixa branca com luz" />
                    <Link to="/contato">
                    <button>
                        Entrar em contato
                    </button>
                    </Link>
                   </div>

                   <div className="bottom-side-menu">
                    <div>
                        <h2>Projetos Realizados:</h2>
                        <p>+200</p>
                    </div>
                    <div className="image-side-menu">
                        <img src={logoCases} alt="Logo revelatio" />
                    </div>

                   </div>

                </div>
                <div className="all-cases">
                
                </div>

            </section>
        </div>

    )
}

export default Transition(Cases)