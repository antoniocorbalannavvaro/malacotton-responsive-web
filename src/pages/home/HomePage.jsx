import style from "./HomePage.module.css";
import SpotifyPlayer from 'react-spotify-player';

// IMAGES:
import dreamTeamLogo from "../../assets/dreamTeamLogo.webp";
import facesLogo from '../../assets/facesBanner.webp';
import instagramImg from '../../assets/instagram.png';
import youtubeImg from '../../assets/youtube.png';
 
const HomePage = () => {

  const size = {
    width: '80%',
    height: '152px',
  };
  
  const view = 'list';
  const theme = 'black';

  return (
    <div className={style.homePage}>

      <div className={style.dreamTeam}>
        <img className={style.responsiveOne} src={dreamTeamLogo}
          width={'496px'}
          height={'301px'} 
          alt="dreamTeamLogo"/>
      </div>

      <div className={style.parrafo}>
        <p>
            Hola, somos Mala Cotton, nacidos en Murcia, y presentamos Dream Team. Lo
            estrenamos el viernes 8 de septiembre y con él abrimos una nueva etapa
            del proyecto en la cual llevamos trabajando más de un año. 
          </p>
          <br/>
          <p>
            Dream Team es un canto a la amistad y la diversión. Grabado y auto producido entre las
            playas de Murcia, Almería y Valencia, se recogen conceptos como la
            juventud, sus errores, la euforia y las ganas de afrontar nuevas
            situaciones. Destacan ritmos disco, melodías pegadizas y arreglos
            delicados.
          </p>
      </div>

      <div className={style.facesLogo}>
        <img className={style.responsiveOne} src={facesLogo} alt="faces"/>
      </div>
        
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/p6HcOzH40Wg?si=wma_eSCCl6FNE2iK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <h1>¿Quieres mover el culo?</h1>

      <div className={style.responsiveSpotify}>
        <SpotifyPlayer
          uri="https://open.spotify.com/album/6UPLN304SEWHcvW9cESpRi?si=DIiJIc8WSTKV5yrphnddQQ"
          size={size}
          view={view}
          theme={theme}
        />
      </div>

      <div className={style.socialContainer}>
        <a 
          href='https://www.instagram.com/malacotton/?hl=es'
          target="_blank" 
          rel="noreferrer">
          <img src={instagramImg} alt=''/>
        </a>
        <a 
          href="https://www.youtube.com/watch?v=p6HcOzH40Wg&ab_channel=MalaCotton" 
          target="_blank" 
          rel="noreferrer">
          <img src={youtubeImg} alt=''/>
        </a>
      </div>

    </div>
  );
};

export default HomePage;
