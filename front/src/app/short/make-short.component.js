import { useState } from 'react';
import './make-short.styles.css';
import {Link} from "react-router-dom";

function MakeShort() {
    const [uri, setUri] = useState('');
    const [short, setShort] = useState('');
    const [shortUri, setShortUri] = useState('');

    const onChange = (e) => {
        setUri({ uri: e.target.value });
    }

    const sendData = async (e) => {
        e.preventDefault();
        setShort('');

        await fetch('http://localhost:8000/short', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uri)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setShortUri(data.short);
                setShort(`${window.location}${data.short}`);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
      <div className="mainBlockMake">
          <p id='headerName'>GoGagoo</p>

          <div className="block_getURL">
              <div className="infoBlock">
                  <p className='authSubText'>Добро пожаловать на</p>
                  <h1 className='authText'>HTTP и точка</h1>
                  <p className='authDescriptionText'>Удобный сервис для <span>укорачивания ссылок</span></p>
                  <img src="/authLogo.png" alt="logo" />
              </div>
              <div className="getBlock">
                  <form>
                      <p>Введите ссылку, чтобы её сократить</p>
                      <input onChange={onChange} />
                      <button  onClick={sendData}>Сократить ссылку</button>
                      <div className="short__result">
                          <strong>Укороченная ссылка</strong>: <Link target="_blank" to={shortUri}>{short}</Link>
                      </div>
                  </form>
              </div>
          </div>
          <p id='authLogo'>© 2022 GoGagoo © All Rights Reserved.</p>
      </div>
    );
}

export default MakeShort;