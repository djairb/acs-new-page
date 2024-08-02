import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
import { parceirosList } from "../../dados/data-colaboradores";
import CardColaborador from '../../componentes/cardColaborador/CardColaborador';



function Colaboradores() {




    return (
        <>

            <Navbar />

            <div className='spaceLineNav'></div>

            <main className='mainColaboradores'>



                {parceirosList.map((colaborador, index) => (


                        <CardColaborador

                            key={index}
                            foto={colaborador.imagem}
                            nome={colaborador.nome}
                            funcao={colaborador.funcao}

                        />

                    

                ))}
                


            </main>

            <Footer />

        </>
    );
}

export default Colaboradores;
