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
  idAtendimento: '1hyNiiDh7lASCiFJIikem2IXz4d',
  codigoSessao: '1_MX40Njc2NzA5Mn5-MTYwMjI1Mjg1NDU2Mn5MR0hWUkpaV2plME5DcElaYmdSTUZqcFJ-UH4',
  tokenPaciente: 'T1==cGFydG5lcl9pZD00Njc2NzA5MiZzaWc9OWJjZDAwZjAzOTc2NzhlNDkxOWU5MjA2MjA5ZGMxZDM1NGY5MTE0NDpzZXNzaW9uX2lkPTFfTVg0ME5qYzJOekE1TW41LU1UWXdNakkxTWpnMU5EVTJNbjVNUjBoV1VrcGFWMnBsTUU1RGNFbGFZbWRTVFVacWNGSi1VSDQmY3JlYXRlX3RpbWU9MTYwMjI1Mjg1NSZub25jZT0wLjY4MTk3ODIwMTQxNzg4Nzcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYwMjMzOTI1NSZjb25uZWN0aW9uX2RhdGE9dXNlcm5hbWUlM0RGcmVkZXJpY28lMjBHYWRlbGhhJTIwQnJhdW4maW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=',
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

