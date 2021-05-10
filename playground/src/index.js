import React from 'react';
import ReactDOM from 'react-dom';

import VideoSession from './component-lib'

import './assets/plugins/nucleo/css/nucleo.css';
import './assets/plugins/materialIcons/css/materialIcons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/argon-dashboard-react.scss';
import { uploadFileService } from './service/uploadFile';

function getTokboxApiKey() {
  return process.env.REACT_APP_TOKBOX_API_KEY;
}

const chamada = {
  idAtendimento: '1sLRjC99w81gkhG1k1QTIzL8U1F',
  codigoSessao: '1_MX40Njc2NzA5Mn5-MTYyMDY1NTIyOTk3Mn5tNkoyM0k1UFpGYXVkYUxyR3JrdWg0d1h-UH4',
  tokenPaciente: 'T1==cGFydG5lcl9pZD00Njc2NzA5MiZzaWc9NTEwMTdlNjkzODI0YWQ2N2NlMTRjMmM2YjEzNmY3NzgxMjUxN2FmNjpzZXNzaW9uX2lkPTFfTVg0ME5qYzJOekE1TW41LU1UWXlNRFkxTlRJeU9UazNNbjV0TmtveU0wazFVRnBHWVhWa1lVeHlSM0pyZFdnMGQxaC1VSDQmY3JlYXRlX3RpbWU9MTYyMDY1NTIzMCZub25jZT0wLjc3MTYyNTE3MjY1MTA5MTcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYyMDc0MTYzMCZjb25uZWN0aW9uX2RhdGE9dXNlcm5hbWUlM0RXYWxsYWNlJTIwU2F0dXJuaW5vJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
  subscriberName: 'Diogo Porto Dias',
  aceitouTermoComparecimento: true,
}

ReactDOM.render(
  <React.StrictMode>
    <VideoSession
      onTogglePictureInPicture={(value) => {console.log(value); alert(value);}}
      isPictureInPictureEnabled
      termoObrigatorio={false}
      appLog={(msg) => {console.log(msg)}}
      onSessionEnded={() => { alert('Finalizou') }}
      getTokboxApiKey={getTokboxApiKey}
      chamadaEmAndamento={chamada}
      currentUserName={chamada.nomeMedico}
      recusouTermo={false}
      onClickVoltar={() => { alert('Clicou em Voltar') }}
      onSelectFileUpload={({nome, extensao, file}) => uploadFileService(chamada.idAtendimento, {nome, extensao, base64: file})}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

