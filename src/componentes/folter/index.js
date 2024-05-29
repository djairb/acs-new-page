import facebook from "../../img/footer/fb.png";
import instagram from "../../img/footer/ig.png";
import youtube from "../../img/footer/yt.png";

function Footer() {



    return (

        <>

        <footer>


            <div id="sociais" className="container-sociais">
                <a href="https://www.facebook.com/conexsoc">
                    <img src={facebook} />
                </a>
                <a href="https://www.instagram.com/somosconexaosocial/">
                    <img src={instagram} />
                </a>
                <a href="https://www.youtube.com/@SomosConexaoSocial">
                    <img src={youtube} />
                </a>

            </div>


            <p className="pFooter">CTAS - Centro de Tecnologia da Associação Conexão Social &copy; 2024</p>

            {/* <p className="pFooter">CTAS - Centro de Tecnologia da Associação Conexão Social &copy; 2024</p>
                <p className="pFooter">CTAS - Centro de Tecnologia da Associação Conexão Social &copy; 2024</p> */}
        </footer>

        </>

        


    );
}

export default Footer;