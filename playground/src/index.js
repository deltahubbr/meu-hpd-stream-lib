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
  idAtendimento: '1iK3qTsbT7CZ2kWhu3m56emrH5c',
  codigoSessao: '2_MX40Njc2NzA5Mn5-MTYwMTY0NzMwNzE3OH5MT1ZXQkZKR1U4UzZvT0s4Y0Y5bzAzL0l-UH4',
  tokenPaciente: 'T1==cGFydG5lcl9pZD00Njc2NzA5MiZzaWc9YzdiOTQ2ZDI0ZWFkYjJiMWMxZmYzMDBkM2NkY2ZjYWRmOTJhYmZkMzpzZXNzaW9uX2lkPTJfTVg0ME5qYzJOekE1TW41LU1UWXdNVFkwTnpNd056RTNPSDVNVDFaWFFrWktSMVU0VXpadlQwczRZMFk1YnpBekwwbC1VSDQmY3JlYXRlX3RpbWU9MTYwMTY0NzMwNyZub25jZT0wLjU5MDIwMTUzNjU3ODA1MTcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYwMTczMzcwNyZjb25uZWN0aW9uX2RhdGE9dXNlcm5hbWUlM0RGcmVkZXJpY28lMjBHYWRlbGhhJTIwQnJhdW4maW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=',
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

