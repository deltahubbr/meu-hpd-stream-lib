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
  idAtendimento: '1jBox2hZ2ilqlUo9YAuTF5UcOqv',
  codigoSessao: '2_MX40Njc2NzA5Mn5-MTYwMzI5MTc3Njk3NX5Ed1Y5VC96SU5QUnozai9TTC90YUVXV1F-UH4',
  tokenPaciente: 'T1==cGFydG5lcl9pZD00Njc2NzA5MiZzaWc9Mzk5ZDM4OWY1NjQzYmY4ZTg4OWE4OWFkMjYxZWU4OTFjYzM3YmJiNzpzZXNzaW9uX2lkPTJfTVg0ME5qYzJOekE1TW41LU1UWXdNekk1TVRjM05qazNOWDVFZDFZNVZDOTZTVTVRVW5vemFpOVRUQzkwWVVWWFYxRi1VSDQmY3JlYXRlX3RpbWU9MTYwMzI5MTc3NyZub25jZT0wLjExMjM3NjA3ODkzMTQ0MDUzJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MDMzNzgxNzcmY29ubmVjdGlvbl9kYXRhPXVzZXJuYW1lJTNERnJlZGVyaWNvJTIwR2FkZWxoYSUyMEJyYXVuJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
  subscriberName: 'Diogo Porto Dias',
  aceitouTermoComparecimento: true,
}

/**
 * TODO: IMPLEMENTAR NO MEU HPD WEB O SERVIÇO uploadFileService
 */

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

