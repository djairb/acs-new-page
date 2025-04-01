import React, { useEffect, useState } from 'react';

function MainVideo() {
    
    

    return (
        <section className='sectionTextImg'>
            <div className='mainTexto'>                

                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/4ueL6Zz6KCg?autoplay=1&mute=1&loop=1&playlist=4ueL6Zz6KCg"
                        title="Conheça a Associação Conexão Social"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                

                
            </div>

            
            
        </section>
    );
}

export default MainVideo;