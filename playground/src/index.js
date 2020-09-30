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
  idAtendimento: '1iEjbQBWiuLtprvsEWntSZURG4p',
  codigoSessao: '2_MX40Njc2NzA5Mn5-MTYwMTQ3OTcyOTI3N351S3Y4RUxLTWZpU3B2RGhoT0JtTEVPaUJ-UH4',
  tokenPaciente: 'T1==cGFydG5lcl9pZD00Njc2NzA5MiZzaWc9MTc4ZTk5MDkzZDJjNGEyYzdlZmM0NjEwZDlkMmY4N2U0ZDIxMDU0YjpzZXNzaW9uX2lkPTJfTVg0ME5qYzJOekE1TW41LU1UWXdNVFEzT1RjeU9USTNOMzUxUzNZNFJVeExUV1pwVTNCMlJHaG9UMEp0VEVWUGFVSi1VSDQmY3JlYXRlX3RpbWU9MTYwMTQ3OTcyOSZub25jZT0wLjcyOTI3MjM3OTM1NjIyMDQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYwMTU2NjEyOSZjb25uZWN0aW9uX2RhdGE9dXNlcm5hbWUlM0RGcmVkZXJpY28lMjBHYWRlbGhhJTIwQnJhdW4maW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=',
  nomeMedico: 'Diogo Porto Dias',
  status: 'em-andamento',
  urlFotoMedico: 'https://meuhpd-users-attachments-dev.s3.us-east-2.amazonaws.com/public/08451629695/foto-perfil.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQH7IJRCAEZS57QGM%2F20200930%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200930T153730Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLWVhc3QtMiJGMEQCIFkhUagtvDPEFbvNhzIG9LrTerWxspZdBMdh9Vb4WCryAiAszqclIqIiKABeOcWddR2RxRsutr%2BX1AsbIWcBzf7gfirEBAhhEAEaDDAxNzEzMDE2MjMwNCIMMJWiAiH58DO9OrduKqEE6di3gLmP0SIJwNkXRQDVXhpcbdQasPKbjyT2ACPXG2a5aSAR4mIKI3JtcepUY9V5jpTB9eVM9TqK%2BsfXoc38liUszM%2FWQa%2FrG9czLRgHxCTwMHXE4ZaLsUNLrPxNKPcC%2Fsvo2GMF6sgVVGhNHqXzmX%2B2QETzDo6fA0ozj%2BkvSQywpOBPFfTnYGj16%2BU1%2BrdtwAreR5586hq6W1usaDI9mKs9oBuf8sLXxzrdl750kZ8RM65hNLpoWpapuNDoDlGSLiIJJaL6OlVpad%2FeP6AIYwONi21hXE8iYjmh%2FTYX30Agepdelv7oqbvW4ZRRt3rAHfFCT%2F%2BvIUy7GwB7VcmNats88UldnTNFUViKc0Y%2B2q4U40HGnmDK1X2Hk2f%2Fvhxb9fV4lDLHspjLv%2F57xBc4ks3fseyOSV2ysXGpZxi4nrJViBOYyycBqRv0KUwbD4NlZTSJURE9%2FEjAmp7bAc%2BMQV4B5C%2BAn3ZXFW%2F%2FiwNxlBcVr5p5Z5zr%2BFicUdS%2BW257VcAmOWCrKjnMWxcfvK0Er8xpwdelD2OgmUPH%2FUkcZs2E18NA5DG%2FPlO8LmIImY%2B2s%2F9VF2C4mEDnAfk0hojSJy6V6R2hxs%2FnMzi05p%2B8Tsh7CCJOGFL7f5bzXZlzjLvgJPHX0nG1OONmieTkETMo60MunvCeSr4nAq9mPdFjPHLbmNchtCKp3p6s2rahkFrxKcLjMXB0%2BHIwR0Hxgr%2BmIugwuszS%2BwU6hgIGqemvKW6A%2BjRQjB45IP2Azkdr%2Fe%2Bv8iCht3Es9xtU75ePFXUXKI%2FL8mG2iZzgg9g5IzffaOGp8qhMFc%2BvBbaS7shGLfhCM7a9wALNZ%2FxoNhz0rU8zpgtExgv6UyH2uAADSdoCy%2F%2FE3T15PV5yYFaxu2sS%2Blv5U3IRsMlReuZgpH0ITzEnGAa9N4KT5ALBEKUqJiDmlOtbvhPRT7q01z1Zbi75Z5aKXyFPMsTL3giCgEi2kS9V40peGOGoP6I4%2FOc%2FoBEKJsRNWH6tSz0b6dw%2BsH1vWNMRqcBC1vhDevcjQP6ZGa9EtT1F2pxJkCCsu8Cs9wvy%2FJ2%2FhUCmmfv00j1O0i7velqv&X-Amz-Signature=53a61b76016ffd0232bb51820c8140dc0b1695dbec751c41e4a023f590235329&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js-v3-%40aws-sdk%2Fclient-s3%2F1.0.0-gamma.4%20Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_6%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F85.0.4183.121%20Safari%2F537.36%20aws-amplify%2F3.5.0%20js&x-id=GetObject',
  aceitouTermoComparecimento: true,
}

ReactDOM.render(
  <React.StrictMode>
    <VideoSession appLog={(msg) => {console.log(msg)}} onSessionEnded={() => { console.log('Finalizou')}} getTokboxApiKey={getTokboxApiKey} chamadaEmAndamento={chamada} currentUserName={chamada.nomeMedico} recusouTermo={false} />
  </React.StrictMode>,
  document.getElementById('root')
);

