import { useLocation } from 'react-router-dom'
import './open-short.styles.css';

function OpenShort() {
    const localhost = useLocation();
    const path = localhost.pathname.substring(1);

    fetch(`http://localhost:8000/${path}`)
            .then(response => response.json())
            .then(data => {
                // eslint-disable-next-line no-restricted-globals
                window.location = /(http(s?)):\/\//i.test(data.uri) ? data.uri : 'https://' + data.uri
            })
            .catch((error) => {
                console.error('Error:', error);
            });

  return (
    <div className='mainBlock'>
      <div className="logo">
        <img src="/authLogoVertical.png" alt="vL"/>
      </div>
      <h1>HTTP и точка</h1>
      <p>Переходим по вашей ссылке...</p>
    </div>
  )
}

export default OpenShort;