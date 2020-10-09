import React from 'react';
import ReactDOM from 'react-dom';

import VideoSession from './component-lib'

import './assets/plugins/nucleo/css/nucleo.css';
import './assets/plugins/materialIcons/css/materialIcons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/argon-dashboard-react.scss';

function getTokboxApiKey() {
  return process.env.REACT_APP_TOKBOX_API_KEY;
}

const chamada = {
  idAtendimento: '1iKVcplqa4YHXa8VKi56rCRCVfW',
  codigoSessao: '1_MX40Njc2NzA5Mn5-MTYwMjE2MzcyMDg5OH51d2tDNWFkZ3F1dkdPOGNRL0V2TWFPQXV-UH4',
  tokenPaciente: 'T1==cGFydG5lcl9pZD00Njc2NzA5MiZzaWc9MTMzMjNmNzMyYWNmMzg0ZDM3NjY0ODg0N2VmYjFkNWJlNmNhY2MxNTpzZXNzaW9uX2lkPTFfTVg0ME5qYzJOekE1TW41LU1UWXdNakUyTXpjeU1EZzVPSDUxZDJ0RE5XRmtaM0YxZGtkUE9HTlJMMFYyVFdGUFFYVi1VSDQmY3JlYXRlX3RpbWU9MTYwMjE2MzcyMSZub25jZT0wLjE1MDgwOTYyOTE3MjU5MDIyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MDIyNTAxMjEmY29ubmVjdGlvbl9kYXRhPXVzZXJuYW1lJTNERnJlZGVyaWNvJTIwR2FkZWxoYSUyMEJyYXVuJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
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
      onClickVoltar={() => { alert('Clicou em Voltar') }}/>
  </React.StrictMode>,
  document.getElementById('root')
);

