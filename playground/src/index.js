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
  idAtendimento: '1ippFy8p7HDfnkvDhKHE0eSs4vz',
  codigoSessao: '2_MX40Njc2NzA5Mn5-MTYwMjYxNDI4NzQyNn5MUE4yKzhMVFBSV2R2YndqYVZwdTBTL29-UH4',
  tokenPaciente: 'T1==cGFydG5lcl9pZD00Njc2NzA5MiZzaWc9ZDU5N2E0NWI2M2U2MWM2NjU5YzQwZDk1ZDMzNGI3ZDE4NjU2ZWQ1MDpzZXNzaW9uX2lkPTJfTVg0ME5qYzJOekE1TW41LU1UWXdNall4TkRJNE56UXlObjVNVUU0eUt6aE1WRkJTVjJSMlluZHFZVlp3ZFRCVEwyOS1VSDQmY3JlYXRlX3RpbWU9MTYwMjYxNDI4NyZub25jZT0wLjY5NzAyMDIzODI3MDUzNjQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYwMjcwMDY4NyZjb25uZWN0aW9uX2RhdGE9dXNlcm5hbWUlM0RGcmVkZXJpY28lMjBHYWRlbGhhJTIwQnJhdW4maW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=',
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

