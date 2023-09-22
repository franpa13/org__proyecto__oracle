import "./Footer.css";

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.instagram.com/fran.paredess/' target="_blank"rel="noreferrer" >
                <img src="img/instagram.png" alt='instagram' />
            </a>
            <a href='https://github.com/franpa13' target="_blank" rel="noreferrer" >
                <img src="img/github.png" alt='GitHUb' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100011163993678' target="_blank" rel="noreferrer">
                <img src="img/facebook.png" alt='Facebook' />
            </a>
        </div>
        <img src='/logo192.png' alt='org' />
        <strong>Proyecto de Alura Latam 
            (created by Francisco Paredes)</strong>
    </footer>
}

export default Footer; 
