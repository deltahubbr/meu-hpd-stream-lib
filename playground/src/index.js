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
  idAtendimento: '1iYTdsumy0DjIT0RmgrBc6IXqyC',
  codigoSessao: '1_MX40Njc2NzA5Mn5-MTYwMjYyODcwMDM4OH5NSWNlSUQ2dWdUZVlMUmxBTEUxQlpZOTh-UH4',
  tokenPaciente: 'T1==cGFydG5lcl9pZD00Njc2NzA5MiZzaWc9ZjFhZWUwYjdmY2VlYTBlN2QxNWI4ZDc5YmFiZmYyMzJjZGM1NTQwMzpzZXNzaW9uX2lkPTFfTVg0ME5qYzJOekE1TW41LU1UWXdNall5T0Rjd01ETTRPSDVOU1dObFNVUTJkV2RVWlZsTVVteEJURVV4UWxwWk9UaC1VSDQmY3JlYXRlX3RpbWU9MTYwMjYyODcwMCZub25jZT0wLjU4OTM0NDA3OTQ2NDc4MTMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYwMjcxNTEwMCZjb25uZWN0aW9uX2RhdGE9dXNlcm5hbWUlM0RGcmVkZXJpY28lMjBHYWRlbGhhJTIwQnJhdW4maW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=',
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

