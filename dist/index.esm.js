import React, { useMemo, useState, Fragment, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Severity, addBreadcrumb, captureException as captureException$1 } from '@sentry/react';
import { OTStreams, OTSubscriber, OTPublisher, OTSession } from 'opentok-react';
import { Form, Input, Button, UncontrolledTooltip, Modal, Card, CardText } from 'reactstrap';
import { map } from 'lodash';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var CONNECTED = 'connected';
var DISCONNECTED = 'disconnected';
var RECONNECTED = 'reconnected';
var RECONNECTING = 'reconnecting';
var CONNECTION_DESTROYED = 'connectionDestroyed';
var DEVICE_NOT_FOUND = 'OT_NO_DEVICES_FOUND';
var AUTHENTICATION_ERROR = 'OT_AUTHENTICATION_ERROR';
var SIGNAL_TYPE = 'signal:text-chat';
var videoSources = {
    CAMERA: 'camera',
    SCREEN: 'screen',
};
var BREAKPOINT = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
};

var theme = {
    colors: {
        primary: 'rgba(182, 0, 0, 1)',
        gray50: '#F7FAFC',
        gray100: '#EDF2F7',
        gray200: '#E2E8F0',
        gray300: '#CBD5E0',
        gray400: '#A0AEC0',
        gray500: '#718096',
        gray600: '#4A5568',
        gray700: '#2D3748',
        gray800: '#1A202C',
        gray900: '#171923',
        yellow400: '#ecc94b',
        blue300: '#1E4E8C',
        blue600: '#2A69AC',
        blue700: '#1E4E8C',
        unknown_red: '#ff230b',
        // CARDS
        green: '#1AB234',
        darkGreen: '#036000',
        gold: '#C18000',
        blue: '#0334c6',
        white: '#FFF',
    },
    breakpoints: BREAKPOINT,
};

var isDeviceNotFound = function (err) {
    return err.name === DEVICE_NOT_FOUND;
};
var isAuthError = function (err) {
    return err.name === AUTHENTICATION_ERROR;
};

var breadcrumb = function (_a) {
    var message = _a.message, category = _a.category, data = _a.data, _b = _a.level, level = _b === void 0 ? Severity.Info : _b;
    addBreadcrumb({
        message: message,
        category: category,
        level: level,
        data: data,
    });
};
var captureException = function (err) {
    captureException$1(err);
};

var getPrimeiroNome = function (str, maxChars) {
    if (maxChars === void 0) { maxChars = 15; }
    var primeiroNome = (str || '').split(' ');
    return (primeiroNome[0] || '').substring(0, maxChars);
};
var removeWhitespaces = function (src, replaceChar) {
    if (replaceChar === void 0) { replaceChar = '_'; }
    return (src || '').split(' ').join(replaceChar);
};

var StreamContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 100vh;\n  width: 100vw;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  background-color: ", ";\n  height: 100vh;\n  width: 100vw;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])), theme.colors.gray700);
function StreamMedico(_a) {
    var nomeSubscriber = _a.nomeSubscriber, onSubscribe = _a.onSubscribe, onSubscribeError = _a.onSubscribeError, onVideoEnabled = _a.onVideoEnabled, onVideoDisabled = _a.onVideoDisabled;
    var subscriberEventHandlers = {
        videoEnabled: function (event) {
            onVideoEnabled && onVideoEnabled(event);
        },
        videoDisabled: function (event) {
            onVideoDisabled && onVideoDisabled(event);
        },
    };
    var Wrapper = OTSubscriber;
    return (React.createElement(StreamContainer, { id: "stream-medico" },
        React.createElement(OTStreams, null,
            React.createElement(Wrapper, { retry: true, maxRetryAttempts: 3, retryAttemptTimeout: 2000, properties: { width: '100vw', height: '100vh', name: nomeSubscriber }, 
                // properties={{ width: '100vw', height: '100vh' }}
                onSubscribe: onSubscribe, onError: onSubscribeError, eventHandlers: subscriberEventHandlers }))));
}
var templateObject_1;

function Icone(_a) {
    var _b = _a.icone, icone = _b === void 0 ? '' : _b, _c = _a.color, color = _c === void 0 ? '#ffffff' : _c, _d = _a.size, size = _d === void 0 ? '22px' : _d, rest = __rest(_a, ["icone", "color", "size"]);
    return (React.createElement("i", __assign({ className: rest.className ? icone + " " + rest.className : icone, style: {
            fontSize: size,
            color: color,
        } }, rest)));
}

var ControlesContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    display: flex;\n    width: 100%;\n"], ["\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    display: flex;\n    width: 100%;\n"])));
var IconContainer = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 48px;\n    height: 48px;\n    background-color: ", ";\n    color: #ffffff;\n    border-radius: 50px;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.4);\n    }\n"], ["\n    width: 48px;\n    height: 48px;\n    background-color: ", ";\n    color: #ffffff;\n    border-radius: 50px;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.4);\n    }\n"])), function (props) { return props.inverted ? 'rgb(255,35,11)' : 'rgba(0, 0, 0, 0.1)'; });
var Icon = function (_a) {
    var icon = _a.icon, title = _a.title, _b = _a.inverted, inverted = _b === void 0 ? false : _b, onClick = _a.onClick;
    return (React.createElement(IconContainer, { inverted: inverted, onClick: onClick, title: title },
        React.createElement(Icone, { icone: icon })));
};
function Controles(_a) {
    var noDevice = _a.noDevice, _b = _a.videoEnabled, videoEnabled = _b === void 0 ? true : _b, onToggleVideo = _a.onToggleVideo, _c = _a.audioEnabled, audioEnabled = _c === void 0 ? true : _c, onToggleAudio = _a.onToggleAudio;
    return (React.createElement(ControlesContainer, null,
        !noDevice && (React.createElement(Icon, { icon: videoEnabled ? 'fas fa-video' : 'fas fa-video-slash', inverted: !videoEnabled, onClick: onToggleVideo, title: videoEnabled ? 'Ocultar vídeo' : 'Compartilhar vídeo' })),
        React.createElement(Icon, { icon: audioEnabled ? 'fas fa-microphone' : 'fas fa-microphone-slash', inverted: !audioEnabled, onClick: onToggleAudio, title: audioEnabled ? 'Colocar em mudo' : 'Compartilhar áudio' })));
}
var templateObject_1$1, templateObject_2;

var ContainerStreamPaciente = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 60px;\n  right: 45px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"], ["\n  position: absolute;\n  top: 60px;\n  right: 45px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"])));
var ContainerCameraPaciente = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 140px;\n  height: 105px;\n  border-radius: 10px;\n  border: 1pt solid ", ";\n  overflow: hidden;\n  margin-bottom: 10px;\n  background-color: ", ";\n  @media screen and (min-width: ", ") {\n    width: 180px;\n    height: 145px;\n  }\n"], ["\n  width: 140px;\n  height: 105px;\n  border-radius: 10px;\n  border: 1pt solid ", ";\n  overflow: hidden;\n  margin-bottom: 10px;\n  background-color: ",
    ";\n  @media screen and (min-width: ", ") {\n    width: 180px;\n    height: 145px;\n  }\n"])), theme.colors.yellow400, function (props) {
    return props.noDevice ? theme.colors.gray700 : 'transparent';
}, theme.breakpoints.md);
var NoDevice = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
function StreamPaciente(_a) {
    var nomePublisher = _a.nomePublisher, _b = _a.noDevice, noDevice = _b === void 0 ? false : _b, videoSource = _a.videoSource, sharingScreen = _a.sharingScreen, _c = _a.videoEnabled, videoEnabled = _c === void 0 ? true : _c, onToggleVideo = _a.onToggleVideo, _d = _a.audioEnabled, audioEnabled = _d === void 0 ? true : _d, onToggleAudio = _a.onToggleAudio, onPublish = _a.onPublish, onError = _a.onError, onAccessDenied = _a.onAccessDenied, onStreamCreated = _a.onStreamCreated, onStreamDestroyed = _a.onStreamDestroyed;
    var publisherEventHandlers = {
        accessDenied: function (event) {
            onAccessDenied && onAccessDenied(event);
        },
        streamCreated: function (event) {
            onStreamCreated && onStreamCreated(event);
        },
        streamDestroyed: function (_a) {
            var reason = _a.reason;
            onStreamDestroyed && onStreamDestroyed(reason);
        },
    };
    var publisherProperties = useMemo(function () {
        return videoSource === videoSources.SCREEN
            ? {
                publishVideo: videoEnabled,
                publishAudio: audioEnabled,
                name: nomePublisher,
                width: '180px',
                height: '145px',
                showControls: false,
                videoSource: videoSources.SCREEN,
            }
            : {
                publishVideo: videoEnabled,
                publishAudio: audioEnabled,
                name: nomePublisher,
                width: '180px',
                height: '145px',
                showControls: false,
            };
    }, [videoEnabled, audioEnabled, videoSource]);
    return (React.createElement(ContainerStreamPaciente, null,
        React.createElement(ContainerCameraPaciente, { noDevice: noDevice },
            React.createElement(OTPublisher, { properties: publisherProperties, onPublish: onPublish, onError: onError, eventHandlers: publisherEventHandlers }),
            noDevice && (React.createElement(NoDevice, null,
                React.createElement("span", { style: {
                        color: theme.colors.gray400,
                        fontSize: '10pt',
                    } }, "C\u00E2mera n\u00E3o detectada")))),
        React.createElement(Controles, { noDevice: noDevice || sharingScreen, videoEnabled: videoEnabled, onToggleVideo: onToggleVideo, audioEnabled: audioEnabled, onToggleAudio: onToggleAudio })));
}
var templateObject_1$2, templateObject_2$1, templateObject_3;

var ChatContainer = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  height: 300px;\n  width: 350px;\n  border-radius: 15px;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  -webkit-border-bottom-left-radius: 5px;\n  -webkit-border-bottom-right-radius: 5px;\n  -moz-border-radius-bottomleft: 5px;\n  -moz-border-radius-bottomright: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n"], ["\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  height: 300px;\n  width: 350px;\n  border-radius: 15px;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  -webkit-border-bottom-left-radius: 5px;\n  -webkit-border-bottom-right-radius: 5px;\n  -moz-border-radius-bottomleft: 5px;\n  -moz-border-radius-bottomright: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n"])), theme.colors.gray50);
var ChatHead = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  height: 35px;\n  width: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  -webkit-border-top-left-radius: 10px;\n  -webkit-border-top-right-radius: 10px;\n  -moz-border-radius-topleft: 10px;\n  -moz-border-radius-topright: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"], ["\n  height: 35px;\n  width: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  -webkit-border-top-left-radius: 10px;\n  -webkit-border-top-right-radius: 10px;\n  -moz-border-radius-topleft: 10px;\n  -moz-border-radius-topright: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"])), theme.colors.blue700);
var ChatHeadTitle = styled.span(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  color: #ffffff;\n  font-size: 9pt;\n  font-weight: 400;\n"], ["\n  color: #ffffff;\n  font-size: 9pt;\n  font-weight: 400;\n"])));
var MessagesContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var MessagesContainerWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  max-height: 220px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 5px;\n"], ["\n  width: 100%;\n  max-height: 220px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 5px;\n"])));
var InputContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n"], ["\n  width: 100%;\n  display: flex;\n"])));
var CustomForm = styled(Form)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n"], ["\n  flex: 1;\n  display: flex;\n"])));
var MessageBoxContainer = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: 20px;\n"], ["\n  margin-bottom: 20px;\n"])));
var MessageLabel = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  text-align: ", ";\n"], ["\n  text-align: ", ";\n"])), function (props) { return props.align || 'right'; });
var MessageBoxLabel = function (_a) {
    var _b = _a.align, align = _b === void 0 ? 'right' : _b, _c = _a.children, children = _c === void 0 ? '' : _c;
    return (React.createElement(MessageLabel, { align: align },
        React.createElement("p", { className: "h5" }, children + ":")));
};
var MessageBoxText = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  word-break: break-word;\n  text-align: ", ";\n"], ["\n  word-break: break-word;\n  text-align: ", ";\n"])), function (props) { return props.align || 'right'; });
var EmptyMessages = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var EmptyText = styled.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  margin-top: 15px;\n  font-size: 10pt;\n  color: ", ";\n"], ["\n  margin-top: 15px;\n  font-size: 10pt;\n  color: ", ";\n"])), theme.colors.gray500);
function Chat(_a) {
    var open = _a.open, _b = _a.messages, messages = _b === void 0 ? [] : _b, disabled = _a.disabled, onMessage = _a.onMessage;
    var _c = useState(''), inputMessage = _c[0], setInputMessage = _c[1];
    var onSubmit = function (evt) {
        evt.preventDefault();
        onMessage && onMessage(inputMessage);
        setInputMessage('');
    };
    var hasMessages = messages.length > 0;
    return (React.createElement(ChatContainer, { className: "" + (open ? '' : 'd-none') },
        React.createElement(ChatHead, null,
            React.createElement(ChatHeadTitle, null, "Chat")),
        React.createElement(MessagesContainer, null,
            hasMessages && (React.createElement(MessagesContainerWrapper, null, map(messages, function (message, index) { return (React.createElement(Fragment, { key: index },
                message.me && (React.createElement(MessageBoxContainer, null,
                    React.createElement(MessageBoxLabel, { align: "right" }, message.label),
                    React.createElement(MessageBoxText, { align: "right" }, message.text))),
                !message.me && (React.createElement(MessageBoxContainer, null,
                    React.createElement(MessageBoxLabel, { align: "left" }, message.label),
                    React.createElement(MessageBoxText, { align: "left" }, message.text))))); }))),
            !hasMessages && (React.createElement(EmptyMessages, null,
                React.createElement(Icone, { color: theme.colors.gray500, icone: "fas fa-comment-slash", size: "48px" }),
                React.createElement(EmptyText, null, "Nenhuma mensagem encontrada")))),
        React.createElement(InputContainer, null,
            React.createElement(CustomForm, { onSubmit: onSubmit },
                React.createElement(Input, { type: "text", placeholder: "Digite a mensagem", value: inputMessage, onChange: function (evt) { return setInputMessage(evt.target.value); }, maxLength: 160, disabled: disabled }),
                React.createElement(Button, { title: "Enviar", type: "submit", disabled: disabled }, "Enviar")))));
}
var templateObject_1$3, templateObject_2$2, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

var RoundedIconContainer = styled.span(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  width: 48px;\n  height: 48px;\n  background-color: ", ";\n  color: #ffffff;\n  border-radius: 50px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  width: 48px;\n  height: 48px;\n  background-color: ",
    ";\n  color: #ffffff;\n  border-radius: 50px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",
    ";\n  }\n"])), function (props) {
    return props.inverted ? props.invertedBg : props.bg;
}, function (props) {
    return props.inverted ? props.invertedBg : props.bg;
});
function RoundedIcon(_a) {
    var _b = _a.bg, bg = _b === void 0 ? 'rgba(0, 0, 0, 0.1)' : _b, _c = _a.invertedBg, invertedBg = _c === void 0 ? 'rgb(255,35,11)' : _c, _d = _a.inverted, inverted = _d === void 0 ? false : _d, onClick = _a.onClick, icon = _a.icon, title = _a.title;
    var id = removeWhitespaces("id_" + new Date().getTime() + "_" + icon);
    var Component = useCallback(function () { return (React.createElement(React.Fragment, null,
        React.createElement(UncontrolledTooltip, { placement: "top", target: id }, title && title),
        React.createElement(RoundedIconContainer, { id: id, bg: bg, invertedBg: invertedBg, inverted: inverted, onClick: onClick, title: title },
            React.createElement(Icone, { icone: icon })))); }, [onClick]);
    return React.createElement(Component, null);
}
var templateObject_1$4;

var BarraOpcoesContainer = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 75px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 15px;\n  @media screen and (min-width: ", ") {\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 75px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 15px;\n  @media screen and (min-width: ", ") {\n    justify-content: center;\n    align-items: center;\n  }\n"])), theme.breakpoints.lg);
var OpcoesContainer = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  width: 150px;\n  justify-content: space-around;\n  align-items: center;\n  @media screen and (min-width: ", ") {\n    width: 250px;\n  }\n"], ["\n  display: flex;\n  width: 150px;\n  justify-content: space-around;\n  align-items: center;\n  @media screen and (min-width: ", ") {\n    width: 250px;\n  }\n"])), theme.breakpoints.lg);
function BarraOpcoes(_a) {
    var chatOpen = _a.chatOpen, onToggleChat = _a.onToggleChat, onClickPictureInPicture = _a.onClickPictureInPicture, sharingScreen = _a.sharingScreen, onToggleScreenSharing = _a.onToggleScreenSharing, onEndCall = _a.onEndCall, _b = _a.isScreenSharingEnabled, isScreenSharingEnabled = _b === void 0 ? false : _b, _c = _a.isPictureInPictureEnabled, isPictureInPictureEnabled = _c === void 0 ? false : _c, disabled = _a.disabled;
    return (React.createElement(BarraOpcoesContainer, null,
        React.createElement(OpcoesContainer, null,
            isPictureInPictureEnabled && (React.createElement(RoundedIcon, { icon: "fas fa-compress-alt", onClick: onClickPictureInPicture, title: 'Minimizar vídeo' })),
            React.createElement(RoundedIcon, { invertedBg: theme.colors.blue300, inverted: chatOpen, icon: "far fa-comments", onClick: onToggleChat, title: chatOpen ? 'Fechar chat' : 'Abrir chat' }),
            React.createElement(RoundedIcon, { invertedBg: theme.colors.blue300, inverted: false, icon: "fas fa-phone-slash", bg: theme.colors.unknown_red, onClick: onEndCall, title: "Finalizar chamada" }),
            isScreenSharingEnabled && (React.createElement(RoundedIcon, { invertedBg: theme.colors.blue300, inverted: sharingScreen, icon: "fas fa-desktop", onClick: onToggleScreenSharing, title: sharingScreen
                    ? 'Parar compartilhamento de tela'
                    : 'Compartilhar tela' })))));
}
var templateObject_1$5, templateObject_2$3;

/* eslint-disable react/prop-types */
function ConfirmationModal(_a) {
    var _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, title = _a.title, children = _a.children, cancelLabel = _a.cancelLabel, onCancelar = _a.onCancelar, _c = _a.cancelDisabled, cancelDisabled = _c === void 0 ? false : _c, confirmLabel = _a.confirmLabel, onConfirmar = _a.onConfirmar, _d = _a.confirmDisabled, confirmDisabled = _d === void 0 ? false : _d, _e = _a.confirmLoading, confirmLoading = _e === void 0 ? false : _e, _f = _a.hasToggle, hasToggle = _f === void 0 ? false : _f, _g = _a.toggleModal, toggleModal = _g === void 0 ? function () { } : _g, _h = _a.onlyConfirmType, onlyConfirmType = _h === void 0 ? false : _h, loadingButtonComponent = _a.loadingButtonComponent;
    return (React.createElement(Modal, { className: "modal-dialog-centered", isOpen: isOpen, toggle: function () { return toggleModal(); } },
        React.createElement("div", { className: "modal-header" },
            React.createElement("h5", { className: "modal-title", id: "exampleModalLabel" }, title),
            hasToggle && (React.createElement("button", { "aria-label": "Close", className: "close", "data-dismiss": "modal", type: "button", onClick: function () { return toggleModal(); } },
                React.createElement("span", { "aria-hidden": true }, "\u00D7")))),
        React.createElement("div", { className: "modal-body" }, children),
        React.createElement("div", { className: "modal-footer" },
            !onlyConfirmType && (React.createElement(Button, { color: "secondary", "data-dismiss": "modal", type: "button", onClick: onCancelar, disabled: cancelDisabled }, cancelLabel || 'Cancelar')),
            loadingButtonComponent && loadingButtonComponent({ confirmLoading: confirmLoading, onConfirmar: onConfirmar, confirmDisabled: confirmDisabled, confirmLabel: confirmLabel }) || (React.createElement(Button, { color: "primary", type: "button", onClick: onConfirmar, disabled: confirmDisabled }, confirmLabel || 'Confirmar')))));
}

var ContainerSemChamadas = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n"], ["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n"])), theme.colors.gray50);
var CustomCard = styled(Card)({
    padding: '30px',
});
var CustomSpan = styled.span(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  text-align: center;\n"], ["\n  text-align: center;\n"])));
function CardErro(_a) {
    var children = _a.children, onClickVoltar = _a.onClickVoltar;
    return (React.createElement(ContainerSemChamadas, null,
        React.createElement(CustomCard, null,
            React.createElement(CardText, null,
                React.createElement(CustomSpan, { className: "h3" }, children)),
            React.createElement(Button, { color: "primary", outline: true, type: "button", onClick: onClickVoltar }, "Voltar para o in\u00EDcio"))));
}
var templateObject_1$6, templateObject_2$4;

var ContainerTelemedicina = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  background-color: ", ";\n"], ["\n  height: 100vh;\n  width: 100vw;\n  background-color: ", ";\n"])), theme.colors.gray50);
var VideoSession = function (_a) {
    var _b = _a.isPictureInPictureEnabled, isPictureInPictureEnabled = _b === void 0 ? false : _b, _c = _a.publisherType, publisherType = _c === void 0 ? 'paciente' : _c, chamadaEmAndamento = _a.chamadaEmAndamento, recusouTermo = _a.recusouTermo, onSessionEnded = _a.onSessionEnded, getTokboxApiKey = _a.getTokboxApiKey, currentUserName = _a.currentUserName, appLog = _a.appLog, onClickVoltar = _a.onClickVoltar, termoObrigatorio = _a.termoObrigatorio;
    var sessionRef = useRef();
    var _d = useState(), sessionStatus = _d[0], setSessionStatus = _d[1];
    var _e = useState(''), mensagemErro = _e[0], setMensagemErro = _e[1];
    var _f = useState(false), mostrarConfirmacaoFinalizacao = _f[0], setMostrarConfirmacaoFinalizacao = _f[1];
    var _g = useState(true), videoPaciente = _g[0], setVideoPaciente = _g[1];
    var _h = useState(videoSources.CAMERA), videoSource = _h[0], setVideoSource = _h[1];
    var _j = useState(false), medicoConectado = _j[0], setMedicoConectado = _j[1];
    var _k = useState(false), noDevice = _k[0], setNoDevice = _k[1];
    var _l = useState(true), audioPaciente = _l[0], setAudioPaciente = _l[1];
    var _m = useState([]), messages = _m[0], setMessages = _m[1];
    var _o = useState(false), chatOpen = _o[0], setChatOpen = _o[1];
    var _p = useState(false), pictureInPictureEnabled = _p[0], setPictureInPictureEnabled = _p[1];
    var onError = function (err) {
        appLog && appLog('<OTSession /> onError ', err);
        /* envia erros ao sentry */
        captureException(err);
        if (isAuthError(err)) {
            setMensagemErro('Sessão de telemedicina expirou!');
        }
        else {
            setMensagemErro('Ocorreu um erro durante a chamada');
        }
    };
    var onToggleVideo = function () {
        appLog && appLog('<Controles /> onToggleVideo ');
        setVideoPaciente(function (val) { return !val; });
    };
    var onToggleAudio = function () {
        appLog && appLog('<Controles /> onToggleAudio ');
        setAudioPaciente(function (val) { return !val; });
    };
    var onToggleChat = function () {
        setChatOpen(function (val) { return !val; });
    };
    var publisherIsPaciente = function () {
        return publisherType === 'paciente';
    };
    var onSendMessage = function (msg) {
        var _a;
        (_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.signal({
            type: 'text-chat',
            data: JSON.stringify({
                text: msg,
                sender: {
                    alias: getPrimeiroNome(publisherIsPaciente() ? currentUserName : chamadaEmAndamento.nomeMedico),
                },
                sentOn: new Date().getTime(),
            }),
        });
    };
    var onToggleScreenSharing = function () {
        var screenSharingOption = videoSource === videoSources.CAMERA
            ? videoSources.SCREEN
            : videoSources.CAMERA;
        appLog && appLog('onToggleScreenSharing', screenSharingOption);
        setVideoSource(screenSharingOption);
    };
    var onEndCall = function () {
        var _a;
        appLog && appLog('Finalizando chamada de telemedicina');
        (_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.disconnect(chamadaEmAndamento.codigoSessao);
        appLog && appLog('Chamada finalizada com sucesso');
        onSessionEnded && onSessionEnded(chamadaEmAndamento.codigoSessao);
    };
    var onMostrarConfirmacaoFinalizacao = function () {
        setMostrarConfirmacaoFinalizacao(true);
    };
    var subscriberNameResolver = function () {
        if (publisherIsPaciente()) {
            return "Dr(a). " + getPrimeiroNome(chamadaEmAndamento.nomeMedico);
        }
        return 'Paciente';
    };
    var sessionEventHandlers = {
        connectionDestroyed: function (event) {
            /* quando o cliente remoto finaliza a sessão VOLUNTARIAMENTE */
            appLog && appLog('<OTSession /> connectionDestroyed', event);
            setSessionStatus(CONNECTION_DESTROYED);
            breadcrumb({ message: 'cliente remoto desconectou da sessão', category: 'telemedicina' });
            onSessionEnded && onSessionEnded(chamadaEmAndamento.codigoSessao);
        },
        sessionConnected: function (event) {
            var _a;
            appLog && appLog('<OTSession /> sessionConnected', event);
            var idConexaoOrigem = event.target.connection.connectionId;
            var idMinhaConexao = (_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.connection.connectionId;
            breadcrumb({ message: "cliente " + (idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto') + " conectou na sess\u00E3o", category: 'telemedicina' });
            appLog && appLog('Minha conexão? ', idConexaoOrigem === idMinhaConexao);
            setSessionStatus(CONNECTED);
        },
        sessionDisconnected: function (event) {
            var _a;
            /* quando o cliente (local ou remoto) é desconectado da sessão (POSSIVELMENTE POR FALTA DE CONECTIVIDADE DA REDE) */
            appLog && appLog('<OTSession /> sessionDisconnected', event);
            var idConexaoOrigem = event.target.id;
            var idMinhaConexao = sessionRef.current === null
                ? idConexaoOrigem
                : (_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.id;
            appLog && appLog('Minha conexão?', idConexaoOrigem === idMinhaConexao);
            breadcrumb({ message: "cliente " + (idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto') + " desconectou da sess\u00E3o", category: 'telemedicina',
                level: Severity.Warning });
            if (idConexaoOrigem === idMinhaConexao) {
                setSessionStatus(CONNECTION_DESTROYED);
            }
            else {
                setSessionStatus(DISCONNECTED);
            }
        },
        sessionReconnected: function (event) {
            var _a;
            appLog && appLog('<OTSession /> sessionReconnected', event);
            var idConexaoOrigem = event.target.id;
            var idMinhaConexao = sessionRef.current === null
                ? idConexaoOrigem
                : (_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.id;
            breadcrumb({ message: "cliente " + (idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto') + " reconectou na sess\u00E3o", category: 'telemedicina',
                level: Severity.Warning });
            setSessionStatus(RECONNECTED);
        },
        sessionReconnecting: function (event) {
            appLog && appLog('<OTSession /> sessionReconnecting', event);
            setSessionStatus(RECONNECTING);
        },
        signal: function (event) {
            var _a;
            appLog && appLog('<OTSession /> signal', event);
            if ((event === null || event === void 0 ? void 0 : event.data) && (event === null || event === void 0 ? void 0 : event.type) === SIGNAL_TYPE) {
                var eventData = JSON.parse(event === null || event === void 0 ? void 0 : event.data);
                var myConnectionId = (_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.connection.connectionId;
                var itsMe = (event === null || event === void 0 ? void 0 : event.from.connectionId) === myConnectionId;
                var newMessage_1 = itsMe
                    ? { me: true, label: 'Eu', text: eventData.text }
                    : {
                        me: false,
                        label: subscriberNameResolver(),
                        text: eventData.text,
                    };
                setMessages(function (m) { return __spreadArrays(m, [newMessage_1]); });
                if (!chatOpen) {
                    setChatOpen(true);
                }
            }
        },
    };
    var streamMedicoHandlers = {
        onSubscribe: function () {
            appLog && appLog("<OTSubscriber /> onSubscribe");
            setMedicoConectado(true);
        },
        onSubscribeError: function (err) {
            appLog && appLog("<OTSubscriber /> onSubscribeError: " + err);
            setMedicoConectado(false);
        },
    };
    var streamPacienteHandlers = {
        onError: function (err) {
            appLog && appLog("<OTPublisher /> onError", err);
            captureException(err);
            if (isDeviceNotFound(err)) {
                setNoDevice(true);
                setVideoPaciente(false);
            }
        },
        onAccessDenied: function () {
            appLog && appLog("<OTPublisher /> onAccessDenied");
            setMensagemErro('Para iniciar a chamada de vídeo, é necessário permitir acesso à camera do dispositivo.');
            onEndCall();
        },
    };
    useEffect(function () {
        if (sessionStatus === CONNECTION_DESTROYED && (termoObrigatorio && !recusouTermo)) {
            setMensagemErro('Chamada finalizada');
        }
    }, [sessionStatus]);
    useEffect(function () {
        var _a;
        if (termoObrigatorio && recusouTermo) {
            appLog && appLog('Finalizando chamada de telemedicina');
            (_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.disconnect(chamadaEmAndamento.codigoSessao);
            appLog && appLog('Chamada finalizada com sucesso');
            setMensagemErro('Para iniciar a chamada, é preciso aceitar o termo de comparecimento');
        }
    }, [recusouTermo]);
    if (mensagemErro) {
        return React.createElement(CardErro, { onClickVoltar: onClickVoltar }, mensagemErro);
    }
    if (!chamadaEmAndamento) {
        return React.createElement(CardErro, { onClickVoltar: onClickVoltar }, "Nenhuma chamada em andamento");
    }
    var aceitouTemoObrigatorio = function () {
        if (termoObrigatorio) {
            if (!chamadaEmAndamento.aceitouTermoComparecimento)
                return false;
            return true;
        }
        else {
            return true;
        }
    };
    var videoPacienteEnabled = function () {
        if (videoPaciente) {
            aceitouTemoObrigatorio();
        }
        else {
            return false;
        }
    };
    var audioPacienteEnabled = function () {
        if (audioPaciente) {
            aceitouTemoObrigatorio();
        }
        else {
            return false;
        }
    };
    var pictureInpictureRequest = function () {
        var subscriberVideo = document.querySelector('.OTSubscriberContainer video.OT_video-element');
        if (subscriberVideo) {
            subscriberVideo
                .requestPictureInPicture()
                .then(function (res) {
                setPictureInPictureEnabled(true);
                subscriberVideo.addEventListener('leavepictureinpicture', function () {
                    setPictureInPictureEnabled(false);
                });
            })
                .catch(function (error) {
                console.log('Request picture-in-picture failed');
            });
        }
    };
    var Wrapper = OTSession;
    return (React.createElement(React.Fragment, null,
        React.createElement(ConfirmationModal, { title: "Finalizar", isOpen: mostrarConfirmacaoFinalizacao, onCancelar: function () {
                setMostrarConfirmacaoFinalizacao(false);
            }, onConfirmar: onEndCall, toggleModal: function () { return null; } }, "Deseja realmente finalizar a chamada?"),
        React.createElement(ContainerTelemedicina, null,
            React.createElement(Wrapper, { ref: sessionRef, apiKey: getTokboxApiKey(), sessionId: chamadaEmAndamento.codigoSessao, token: publisherIsPaciente() ? chamadaEmAndamento.tokenPaciente : chamadaEmAndamento.tokenMedico, onError: onError, eventHandlers: sessionEventHandlers }, !pictureInPictureEnabled && (React.createElement(React.Fragment, null,
                React.createElement(StreamMedico, __assign({}, streamMedicoHandlers, { nomeSubscriber: subscriberNameResolver() })),
                React.createElement(StreamPaciente, __assign({}, streamPacienteHandlers, { noDevice: noDevice, videoEnabled: videoPacienteEnabled(), onToggleVideo: onToggleVideo, audioEnabled: audioPacienteEnabled(), onToggleAudio: onToggleAudio, sharingScreen: videoSource === videoSources.SCREEN, nomePublisher: getPrimeiroNome(currentUserName, 10), videoSource: videoSource })),
                React.createElement(BarraOpcoes, { chatOpen: chatOpen, onToggleChat: onToggleChat, sharingScreen: videoSource === videoSources.SCREEN, onToggleScreenSharing: onToggleScreenSharing, onEndCall: onMostrarConfirmacaoFinalizacao, disabled: termoObrigatorio && !chamadaEmAndamento.aceitouTermoComparecimento, isPictureInPictureEnabled: isPictureInPictureEnabled, onClickPictureInPicture: pictureInpictureRequest }),
                React.createElement(Chat, { open: chatOpen, messages: messages, onMessage: onSendMessage, disabled: !medicoConectado || (termoObrigatorio && !chamadaEmAndamento.aceitouTermoComparecimento) })))))));
};
var templateObject_1$7;

export default VideoSession;
