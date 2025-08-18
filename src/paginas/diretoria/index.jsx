import React from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

function Diretoria() {
    return (
        <div className="page-container">
            <Navbar />

            <main className="content-wrap">
                <h1 class="equipe-titulo">Diretoria</h1>
                <div class="diretoria">
                    <div class="membro-card">
                        <div class="card-header">
                            <h3>Ione Severina da Silva</h3>
                            <p>Diretora Institucional</p>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="card-header">
                            <h3>Beatriz Sanda da Silva</h3>
                            <p>Diretora Financeira</p>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="card-header">
                            <h3>Geovane de Lima</h3>
                            <p>Diretor Secretário</p>
                        </div>
                    </div>
                </div>

                <h1 class="equipe-titulo">Conselho Fiscal</h1>
                <div class="conselho-fiscal">
                    <div class="membro-card">
                        <div class="card-header">
                            <h3>Helionelys Barbosa</h3>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="card-header">
                            <h3>Andreis Victor</h3>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="card-header">
                            <h3>Marcio Rodolfo</h3>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="card-header">
                            <h3>André Albuquerque</h3>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="card-header">
                            <h3>Leidiane França</h3>
                        </div>
                    </div>

                    <div class="membro-card">
                        <div class="card-header">
                            <h3>Janailton Batista</h3>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Diretoria;