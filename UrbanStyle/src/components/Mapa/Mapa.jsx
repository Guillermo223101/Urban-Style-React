import './Mapa.css'

export default function Mapa(){
    return(
        <section id="mapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.262024763673!2d-70.5813727243029!3d-33.59850527333112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d7037854df81%3A0x893f58a1479b8f82!2sDuoc%20UC%3A%20Sede%20Puente%20Alto!5e0!3m2!1ses-419!2scl!4v1789952201692!5m2!1ses-419!2scl"
                width="600" height="520" style={{border:0}} 
                referrerpolicy="strict-origin-when-cross-origin">    
            </iframe>
        </section>
    )
}