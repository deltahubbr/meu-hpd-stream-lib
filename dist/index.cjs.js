'use strict';

var React = require('react');
var styled = require('styled-components');
var Sentry = require('@sentry/react');
var opentokReact = require('opentok-react');
var reactstrap = require('reactstrap');
var lodash = require('lodash');
var ReactLoading = require('react-loading');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var ReactLoading__default = /*#__PURE__*/_interopDefaultLegacy(ReactLoading);

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var AUTHENTICATION_ERROR = 'OT_AUTHENTICATION_ERROR';
var SIGNAL_TYPE_TEXT = 'signal:text-chat';
var SIGNAL_TYPE_FILE = 'signal:file-chat';
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

var isAuthError = function (err) {
    return err.name === AUTHENTICATION_ERROR;
};

var breadcrumb = function (_a) {
    var message = _a.message, category = _a.category, data = _a.data, _b = _a.level, level = _b === void 0 ? Sentry.Severity.Info : _b;
    Sentry.addBreadcrumb({
        message: message,
        category: category,
        level: level,
        data: data,
    });
};
var captureException = function (err) {
    Sentry.captureException(err);
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

var StreamContainer = styled__default['default'].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 100vh;\n  width: 100vw;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  background-color: ", ";\n  height: 100vh;\n  width: 100vw;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])), theme.colors.gray700);
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
    var Wrapper = opentokReact.OTSubscriber;
    return (React__default['default'].createElement(StreamContainer, { id: "stream-medico" },
        React__default['default'].createElement(opentokReact.OTStreams, null,
            React__default['default'].createElement(Wrapper, { retry: true, maxRetryAttempts: 3, retryAttemptTimeout: 2000, properties: { width: '100vw', height: '100vh', name: nomeSubscriber }, 
                // properties={{ width: '100vw', height: '100vh' }}
                onSubscribe: onSubscribe, onError: onSubscribeError, eventHandlers: subscriberEventHandlers }))));
}
var templateObject_1;

function Icone(_a) {
    var _b = _a.icone, icone = _b === void 0 ? '' : _b, _c = _a.color, color = _c === void 0 ? '#ffffff' : _c, _d = _a.size, size = _d === void 0 ? '22px' : _d, rest = __rest(_a, ["icone", "color", "size"]);
    return (React__default['default'].createElement("i", __assign({ className: rest.className ? icone + " " + rest.className : icone, style: {
            fontSize: size,
            color: color,
        } }, rest)));
}

var ControlesContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    display: flex;\n    width: 100%;\n"], ["\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    display: flex;\n    width: 100%;\n"])));
var IconContainer = styled__default['default'].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 48px;\n    height: 48px;\n    background-color: ", ";\n    color: #ffffff;\n    border-radius: 50px;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.4);\n    }\n"], ["\n    width: 48px;\n    height: 48px;\n    background-color: ", ";\n    color: #ffffff;\n    border-radius: 50px;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.4);\n    }\n"])), function (props) { return props.inverted ? 'rgb(255,35,11)' : 'rgba(0, 0, 0, 0.1)'; });
var Icon = function (_a) {
    var icon = _a.icon, title = _a.title, _b = _a.inverted, inverted = _b === void 0 ? false : _b, onClick = _a.onClick;
    return (React__default['default'].createElement(IconContainer, { inverted: inverted, onClick: onClick, title: title },
        React__default['default'].createElement(Icone, { icone: icon })));
};
function Controles(_a) {
    var noDevice = _a.noDevice, _b = _a.videoEnabled, videoEnabled = _b === void 0 ? true : _b, onToggleVideo = _a.onToggleVideo, _c = _a.audioEnabled, audioEnabled = _c === void 0 ? true : _c, onToggleAudio = _a.onToggleAudio;
    return (React__default['default'].createElement(ControlesContainer, null,
        !noDevice && (React__default['default'].createElement(Icon, { icon: videoEnabled ? 'fas fa-video' : 'fas fa-video-slash', inverted: !videoEnabled, onClick: onToggleVideo, title: videoEnabled ? 'Ocultar vídeo' : 'Compartilhar vídeo' })),
        React__default['default'].createElement(Icon, { icon: audioEnabled ? 'fas fa-microphone' : 'fas fa-microphone-slash', inverted: !audioEnabled, onClick: onToggleAudio, title: audioEnabled ? 'Colocar em mudo' : 'Compartilhar áudio' })));
}
var templateObject_1$1, templateObject_2;

var ContainerStreamPaciente = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 60px;\n  right: 45px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  & div.OT_video-poster {\n    z-index: 0;\n  }\n"], ["\n  position: absolute;\n  top: 60px;\n  right: 45px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  & div.OT_video-poster {\n    z-index: 0;\n  }\n"])));
var ContainerCameraPaciente = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 140px;\n  height: 105px;\n  border-radius: 10px;\n  border: 1pt solid ", ";\n  overflow: hidden;\n  margin-bottom: 10px;\n  background-color: ", ";\n  @media screen and (min-width: ", ") {\n    width: 180px;\n    height: 145px;\n  }\n"], ["\n  width: 140px;\n  height: 105px;\n  border-radius: 10px;\n  border: 1pt solid ", ";\n  overflow: hidden;\n  margin-bottom: 10px;\n  background-color: ",
    ";\n  @media screen and (min-width: ", ") {\n    width: 180px;\n    height: 145px;\n  }\n"])), theme.colors.yellow400, function (props) {
    return props.noDevice ? theme.colors.gray700 : 'transparent';
}, theme.breakpoints.md);
var NoDevice = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
function StreamPaciente(_a) {
    var nomePublisher = _a.nomePublisher, _b = _a.noDevice, noDevice = _b === void 0 ? false : _b, videoSource = _a.videoSource, sharingScreen = _a.sharingScreen, _c = _a.videoEnabled, videoEnabled = _c === void 0 ? true : _c, onToggleVideo = _a.onToggleVideo, _d = _a.audioEnabled, audioEnabled = _d === void 0 ? true : _d, onToggleAudio = _a.onToggleAudio, onPublish = _a.onPublish, onError = _a.onError, onAccessDenied = _a.onAccessDenied, onStreamCreated = _a.onStreamCreated, onStreamDestroyed = _a.onStreamDestroyed, onMediaStopped = _a.onMediaStopped;
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
        mediaStopped: function (e) {
            onMediaStopped && onMediaStopped(e);
        },
    };
    var publisherProperties = React.useMemo(function () {
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
    return (React__default['default'].createElement(ContainerStreamPaciente, null,
        React__default['default'].createElement(ContainerCameraPaciente, { noDevice: noDevice },
            React__default['default'].createElement(opentokReact.OTPublisher, { properties: publisherProperties, onPublish: onPublish, onError: onError, eventHandlers: publisherEventHandlers }),
            noDevice && (React__default['default'].createElement(NoDevice, null,
                React__default['default'].createElement("span", { style: {
                        color: theme.colors.gray400,
                        fontSize: '10pt',
                    } }, "C\u00E2mera n\u00E3o detectada")))),
        React__default['default'].createElement(Controles, { noDevice: noDevice || sharingScreen, videoEnabled: videoEnabled, onToggleVideo: onToggleVideo, audioEnabled: audioEnabled, onToggleAudio: onToggleAudio })));
}
var templateObject_1$2, templateObject_2$1, templateObject_3;

var uploadFileTypes = {
    WORD: ['.doc', '.docx'],
    PDF: ['.pdf'],
    EXCEL: ['.xls', '.xlsx', '.xlsm'],
    IMAGES: ['.jpg', '.jpeg', '.png'],
};

var Container = styled__default['default'].a(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100px;\n  padding: 5px;\n  border: solid 1px #b7c2da;\n  border-radius: 4px;\n  background-color: #e7ecf7;\n\n  :hover  {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100px;\n  padding: 5px;\n  border: solid 1px #b7c2da;\n  border-radius: 4px;\n  background-color: #e7ecf7;\n\n  :hover  {\n    cursor: pointer;\n  }\n"])));
var NomeArquivo = styled__default['default'].span(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  margin-top: 0.5rem;\n  line-height: 1.3;\n  font-size: 10px;\n  text-align: center;\n  word-break: break-all;\n"], ["\n  margin-top: 0.5rem;\n  line-height: 1.3;\n  font-size: 10px;\n  text-align: center;\n  word-break: break-all;\n"])));
var templateObject_1$3, templateObject_2$2;

var FileChatLink = function (_a) {
    var arquivo = _a.arquivo;
    var extIcons = [
        {
            ext: uploadFileTypes.PDF,
            icon: 'fas fa-file-pdf',
        },
        {
            ext: uploadFileTypes.WORD,
            icon: 'fas fa-file-word',
        },
        {
            ext: uploadFileTypes.EXCEL,
            icon: 'fas fa-file-excel',
        },
        {
            ext: uploadFileTypes.IMAGES,
            icon: 'fas fa-file-image',
        }
    ];
    var iconTypeResolverr = function () {
        var _a;
        return (_a = lodash.find(extIcons, function (types) { return lodash.some(types.ext, function (ext) { return ext.toLowerCase() === (arquivo === null || arquivo === void 0 ? void 0 : arquivo.extension.toLowerCase()); }); })) === null || _a === void 0 ? void 0 : _a.icon;
    };
    return arquivo && (React__default['default'].createElement(Container, { href: arquivo.url, target: "_blank" },
        React__default['default'].createElement(Icone, { color: theme.colors.gray400, icone: iconTypeResolverr(), size: "30px" }),
        React__default['default'].createElement(NomeArquivo, null, arquivo.name))) || null;
};

var UploaderContainer = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  height: 100%;\n  left: 10px;\n  align-items: center;\n\n  :hover {\n    cursor: ", ";\n\n    i {\n      color: ", " !important;\n      :hover {\n        cursor: pointer;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  position: absolute;\n  height: 100%;\n  left: 10px;\n  align-items: center;\n\n  :hover {\n    cursor: ", ";\n\n    i {\n      color: ", " !important;\n      :hover {\n        cursor: pointer;\n      }\n    }\n  }\n"])), function (props) { return props.disabled ? 'default' : 'pointer'; }, theme.colors.gray800);
var InputFile = styled__default['default'].input(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n\n  :focus + label {\n    /* keyboard navigation */\n    outline: 1px dotted #000;\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n"], ["\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n\n  :focus + label {\n    /* keyboard navigation */\n    outline: 1px dotted #000;\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n"])));
var templateObject_1$4, templateObject_2$3;

var FileUploader = function (_a) {
    var disabled = _a.disabled, onLoad = _a.onLoad, onError = _a.onError, isLoading = _a.isLoading;
    /**
     *  TODO: Disparar notificação ao ocorrer erro
     *        do upload da imagem
     */
    function handleChange(e) {
        try {
            if (e.target.files && e.target.files[0]) {
                var reader = new FileReader();
                var ext_1 = "." + e.target.files[0].type.split('/')[1];
                var nome_1 = e.target.files[0].name;
                reader.onload = function (evt) {
                    var _a;
                    var file = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.result;
                    onLoad({ nome: nome_1, extensao: ext_1, file: typeof file === 'string' ? file.split(',')[1] : file });
                };
                reader.readAsDataURL(e.target.files[0]); // convert to base64 string
            }
        }
        catch (err) {
            onError(err);
        }
    }
    var acceptedExtensions = Object.keys(uploadFileTypes).map(function (type) {
        return uploadFileTypes[type];
    }).join();
    return (React__default['default'].createElement(UploaderContainer, { disabled: disabled || false }, isLoading ? (React__default['default'].createElement(ReactLoading__default['default'], { type: "spin", color: theme.colors.gray400, height: 25, width: 16 })) : (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("label", { htmlFor: "file-chat-uploader", style: { margin: '0px' } },
            React__default['default'].createElement(Icone, { color: (disabled) ? theme.colors.gray300 : theme.colors.gray600, icone: "fas fa-upload", size: "14px" })),
        React__default['default'].createElement(InputFile, { type: "file", id: "file-chat-uploader", accept: acceptedExtensions, onChange: handleChange })))));
};

var ChatContainer = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  height: 300px;\n  width: 350px;\n  border-radius: 15px;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  -webkit-border-bottom-left-radius: 5px;\n  -webkit-border-bottom-right-radius: 5px;\n  -moz-border-radius-bottomleft: 5px;\n  -moz-border-radius-bottomright: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  @media screen and (max-width: ", ") {\n    width: 98%;\n    margin: 1%;\n    right: 0;\n    bottom: 75px;\n  }\n"], ["\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  height: 300px;\n  width: 350px;\n  border-radius: 15px;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  -webkit-border-bottom-left-radius: 5px;\n  -webkit-border-bottom-right-radius: 5px;\n  -moz-border-radius-bottomleft: 5px;\n  -moz-border-radius-bottomright: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  @media screen and (max-width: ", ") {\n    width: 98%;\n    margin: 1%;\n    right: 0;\n    bottom: 75px;\n  }\n"])), theme.colors.gray50, theme.breakpoints.sm);
var ChatHead = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  height: 35px;\n  width: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  -webkit-border-top-left-radius: 10px;\n  -webkit-border-top-right-radius: 10px;\n  -moz-border-radius-topleft: 10px;\n  -moz-border-radius-topright: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"], ["\n  height: 35px;\n  width: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  -webkit-border-top-left-radius: 10px;\n  -webkit-border-top-right-radius: 10px;\n  -moz-border-radius-topleft: 10px;\n  -moz-border-radius-topright: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"])), theme.colors.blue700);
var ChatHeadTitle = styled__default['default'].span(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  color: #ffffff;\n  font-size: 9pt;\n  font-weight: 400;\n"], ["\n  color: #ffffff;\n  font-size: 9pt;\n  font-weight: 400;\n"])));
var MessagesContainer = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var MessagesContainerWrapper = styled__default['default'].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  max-height: 220px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 5px;\n"], ["\n  width: 100%;\n  max-height: 220px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 5px;\n"])));
var InputContainer = styled__default['default'].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n"], ["\n  width: 100%;\n  display: flex;\n"])));
var CustomForm = styled__default['default'](reactstrap.Form)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  position: relative;\n"], ["\n  flex: 1;\n  display: flex;\n  position: relative;\n"])));
var MessageBoxContainer = styled__default['default'].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  padding: 0px 10px;\n"], ["\n  margin-bottom: 20px;\n  padding: 0px 10px;\n"])));
var MessageLabel = styled__default['default'].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  text-align: ", ";\n"], ["\n  text-align: ", ";\n"])), function (props) { return props.align || 'right'; });
var MessageBoxLabel = function (_a) {
    var _b = _a.align, align = _b === void 0 ? 'right' : _b, _c = _a.children, children = _c === void 0 ? '' : _c;
    return (React__default['default'].createElement(MessageLabel, { align: align },
        React__default['default'].createElement("p", { className: "h5" }, children + ":")));
};
var MessageBoxContent = styled__default['default'].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ", ";\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ", ";\n"])), function (props) { return props.justify || 'flex-end'; });
var EmptyMessages = styled__default['default'].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var EmptyText = styled__default['default'].span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  margin-top: 15px;\n  font-size: 10pt;\n  color: ", ";\n"], ["\n  margin-top: 15px;\n  font-size: 10pt;\n  color: ", ";\n"])), theme.colors.gray500);
function Chat(_a) {
    var _this = this;
    var open = _a.open, _b = _a.messages, messages = _b === void 0 ? [] : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, onMessage = _a.onMessage, _d = _a.uploadDisabled, uploadDisabled = _d === void 0 ? false : _d, onSelectFileUpload = _a.onSelectFileUpload;
    var messagesEndRef = React.useRef();
    var _e = React.useState(''), inputMessage = _e[0], setInputMessage = _e[1];
    var _f = React.useState(false), isUploadingFile = _f[0], setIsUploadingFile = _f[1];
    disabled = false;
    var onSubmit = function (evt) {
        evt.preventDefault();
        onMessage && onMessage(inputMessage);
        setInputMessage('');
    };
    var hasMessages = messages.length > 0;
    React.useEffect(function () {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    var handleSelectFile = function (_a) {
        var nome = _a.nome, extensao = _a.extensao, file = _a.file;
        return __awaiter(_this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setIsUploadingFile(true);
                        _b = onSelectFileUpload;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, onSelectFileUpload({ nome: nome, extensao: extensao, file: file })
                                .then(function (arquivos) {
                                arquivos.forEach(function (arquivo) {
                                    onMessage && onMessage(arquivo);
                                });
                            })
                                .catch(function (err) {
                            })
                                .finally(function () {
                                setIsUploadingFile(false);
                            })];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        return [2 /*return*/];
                }
            });
        });
    };
    var handleSelectFileError = function (error) {
        alert('ocorreu um erro');
    };
    var renderMessageBox = function (_a) {
        var message = _a.message, justify = _a.justify;
        var _b = (message === null || message === void 0 ? void 0 : message.file) || { url: '', nome: '' }, url = _b.url, nome = _b.nome;
        return (message === null || message === void 0 ? void 0 : message.file) ? (React__default['default'].createElement(MessageBoxContent, { justify: justify },
            React__default['default'].createElement(FileChatLink, { arquivo: { url: url, name: nome, extension: nome.substr(nome.lastIndexOf('.')) } }))) : (React__default['default'].createElement(MessageBoxContent, { justify: justify }, message.text));
    };
    return (React__default['default'].createElement(ChatContainer, { className: "" + (open ? '' : 'd-none') },
        React__default['default'].createElement(ChatHead, null,
            React__default['default'].createElement(ChatHeadTitle, null, "Chat")),
        React__default['default'].createElement(MessagesContainer, null,
            hasMessages && (React__default['default'].createElement(MessagesContainerWrapper, null,
                lodash.map(messages, function (message, index) { return (React__default['default'].createElement(React.Fragment, { key: index },
                    message.me && (React__default['default'].createElement(MessageBoxContainer, null,
                        React__default['default'].createElement(MessageBoxLabel, { align: "right" }, message.label),
                        renderMessageBox({ message: message, justify: 'flex-end' }))),
                    !message.me && (React__default['default'].createElement(MessageBoxContainer, null,
                        React__default['default'].createElement(MessageBoxLabel, { align: "left" }, message.label),
                        renderMessageBox({ message: message, justify: 'flex-start' }))))); }),
                React__default['default'].createElement("div", { ref: messagesEndRef }))),
            !hasMessages && (React__default['default'].createElement(EmptyMessages, null,
                React__default['default'].createElement(Icone, { color: theme.colors.gray500, icone: "fas fa-comment-slash", size: "48px" }),
                React__default['default'].createElement(EmptyText, null, "Nenhuma mensagem encontrada")))),
        React__default['default'].createElement(InputContainer, null,
            React__default['default'].createElement(CustomForm, { onSubmit: onSubmit },
                !uploadDisabled && (React__default['default'].createElement(FileUploader, { onLoad: handleSelectFile, onError: handleSelectFileError, isLoading: isUploadingFile })),
                React__default['default'].createElement(reactstrap.Input, { style: { paddingLeft: !uploadDisabled ? '2rem' : '0.75rem' }, type: "text", placeholder: isUploadingFile ? 'Enviando arquivo...' : 'Digite a mensagem', value: inputMessage, onChange: function (evt) { return setInputMessage(evt.target.value); }, maxLength: 160, disabled: disabled }),
                React__default['default'].createElement(reactstrap.Button, { title: "Enviar", type: "submit", disabled: disabled }, "Enviar")))));
}
var templateObject_1$5, templateObject_2$4, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

var RoundedIconContainer = styled__default['default'].span(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  width: 48px;\n  height: 48px;\n  background-color: ", ";\n  color: #ffffff;\n  border-radius: 50px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  width: 48px;\n  height: 48px;\n  background-color: ",
    ";\n  color: #ffffff;\n  border-radius: 50px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",
    ";\n  }\n"])), function (props) {
    return props.inverted ? props.invertedBg : props.bg;
}, function (props) {
    return props.inverted ? props.invertedBg : props.bg;
});
function RoundedIcon(_a) {
    var _b = _a.bg, bg = _b === void 0 ? 'rgba(0, 0, 0, 0.1)' : _b, _c = _a.invertedBg, invertedBg = _c === void 0 ? 'rgb(255,35,11)' : _c, _d = _a.inverted, inverted = _d === void 0 ? false : _d, onClick = _a.onClick, icon = _a.icon, title = _a.title;
    var id = removeWhitespaces("id_" + new Date().getTime() + "_" + icon);
    var Component = React.useCallback(function () { return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(reactstrap.UncontrolledTooltip, { placement: "top", target: id }, title && title),
        React__default['default'].createElement(RoundedIconContainer, { id: id, bg: bg, invertedBg: invertedBg, inverted: inverted, onClick: onClick, title: title },
            React__default['default'].createElement(Icone, { icone: icon })))); }, [onClick]);
    return React__default['default'].createElement(Component, null);
}
var templateObject_1$6;

var BarraOpcoesContainer = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 15px;\n"], ["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 15px;\n"])));
var OpcoesContainer = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  width: 150px;\n  justify-content: space-around;\n  align-items: center;\n  @media screen and (min-width: ", ") {\n    width: 250px;\n  }\n"], ["\n  display: flex;\n  width: 150px;\n  justify-content: space-around;\n  align-items: center;\n  @media screen and (min-width: ", ") {\n    width: 250px;\n  }\n"])), theme.breakpoints.lg);
function BarraOpcoes(_a) {
    var chatOpen = _a.chatOpen, onToggleChat = _a.onToggleChat, onClickPictureInPicture = _a.onClickPictureInPicture, sharingScreen = _a.sharingScreen, onToggleScreenSharing = _a.onToggleScreenSharing, onEndCall = _a.onEndCall, _b = _a.isScreenSharingEnabled, isScreenSharingEnabled = _b === void 0 ? false : _b, _c = _a.isPictureInPictureEnabled, isPictureInPictureEnabled = _c === void 0 ? false : _c, disabled = _a.disabled;
    return (React__default['default'].createElement(BarraOpcoesContainer, null,
        React__default['default'].createElement(OpcoesContainer, null,
            isPictureInPictureEnabled && (React__default['default'].createElement(RoundedIcon, { icon: "fas fa-compress-alt", onClick: onClickPictureInPicture, title: 'Minimizar vídeo' })),
            React__default['default'].createElement(RoundedIcon, { invertedBg: theme.colors.blue300, inverted: chatOpen, icon: "far fa-comments", onClick: onToggleChat, title: chatOpen ? 'Fechar chat' : 'Abrir chat' }),
            React__default['default'].createElement(RoundedIcon, { invertedBg: theme.colors.blue300, inverted: false, icon: "fas fa-phone-slash", bg: theme.colors.unknown_red, onClick: onEndCall, title: "Finalizar chamada" }),
            isScreenSharingEnabled && (React__default['default'].createElement(RoundedIcon, { invertedBg: theme.colors.blue300, inverted: sharingScreen, icon: "fas fa-desktop", onClick: onToggleScreenSharing, title: sharingScreen
                    ? 'Parar compartilhamento de tela'
                    : 'Compartilhar tela' })))));
}
var templateObject_1$7, templateObject_2$5;

/* eslint-disable react/prop-types */
function ConfirmationModal(_a) {
    var _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, title = _a.title, children = _a.children, cancelLabel = _a.cancelLabel, onCancelar = _a.onCancelar, _c = _a.cancelDisabled, cancelDisabled = _c === void 0 ? false : _c, confirmLabel = _a.confirmLabel, onConfirmar = _a.onConfirmar, _d = _a.confirmDisabled, confirmDisabled = _d === void 0 ? false : _d, _e = _a.confirmLoading, confirmLoading = _e === void 0 ? false : _e, _f = _a.hasToggle, hasToggle = _f === void 0 ? false : _f, _g = _a.toggleModal, toggleModal = _g === void 0 ? function () { } : _g, _h = _a.onlyConfirmType, onlyConfirmType = _h === void 0 ? false : _h, loadingButtonComponent = _a.loadingButtonComponent;
    return (React__default['default'].createElement(reactstrap.Modal, { className: "modal-dialog-centered", isOpen: isOpen, toggle: function () { return toggleModal(); } },
        React__default['default'].createElement("div", { className: "modal-header" },
            React__default['default'].createElement("h5", { className: "modal-title", id: "exampleModalLabel" }, title),
            hasToggle && (React__default['default'].createElement("button", { "aria-label": "Close", className: "close", "data-dismiss": "modal", type: "button", onClick: function () { return toggleModal(); } },
                React__default['default'].createElement("span", { "aria-hidden": true }, "\u00D7")))),
        React__default['default'].createElement("div", { className: "modal-body" }, children),
        React__default['default'].createElement("div", { className: "modal-footer" },
            !onlyConfirmType && (React__default['default'].createElement(reactstrap.Button, { color: "secondary", "data-dismiss": "modal", type: "button", onClick: onCancelar, disabled: cancelDisabled }, cancelLabel || 'Cancelar')),
            loadingButtonComponent && loadingButtonComponent({ confirmLoading: confirmLoading, onConfirmar: onConfirmar, confirmDisabled: confirmDisabled, confirmLabel: confirmLabel }) || (React__default['default'].createElement(reactstrap.Button, { color: "primary", type: "button", onClick: onConfirmar, disabled: confirmDisabled }, confirmLabel || 'Confirmar')))));
}

var ContainerSemChamadas = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n"], ["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n"])), theme.colors.gray50);
var CustomCard = styled__default['default'](reactstrap.Card)({
    padding: '30px',
});
var CustomSpan = styled__default['default'].span(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  text-align: center;\n"], ["\n  text-align: center;\n"])));
function CardErro(_a) {
    var children = _a.children, onClickVoltar = _a.onClickVoltar;
    return (React__default['default'].createElement(ContainerSemChamadas, null,
        React__default['default'].createElement(CustomCard, null,
            React__default['default'].createElement(reactstrap.CardText, null,
                React__default['default'].createElement(CustomSpan, { className: "h3" }, children)),
            React__default['default'].createElement(reactstrap.Button, { color: "primary", outline: true, type: "button", onClick: onClickVoltar }, "Voltar para o in\u00EDcio"))));
}
var templateObject_1$8, templateObject_2$6;

const version="1.1.8";

var ContainerTelemedicina = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  background-color: ", ";\n  position: relative;\n"], ["\n  height: 100vh;\n  width: 100vw;\n  background-color: ", ";\n  position: relative;\n"])), theme.colors.gray50);
var TagVersion = styled__default['default'].span(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 10px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.3);\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 10px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.3);\n"])));
var VideoSession = function (_a) {
    var uploadDisabled = _a.uploadDisabled, onSelectFileUpload = _a.onSelectFileUpload, onTogglePictureInPicture = _a.onTogglePictureInPicture, _b = _a.isPictureInPictureEnabled, isPictureInPictureEnabled = _b === void 0 ? false : _b, _c = _a.publisherType, publisherType = _c === void 0 ? 'paciente' : _c, chamadaEmAndamento = _a.chamadaEmAndamento, recusouTermo = _a.recusouTermo, onSessionEnded = _a.onSessionEnded, getTokboxApiKey = _a.getTokboxApiKey, currentUserName = _a.currentUserName, appLog = _a.appLog, onClickVoltar = _a.onClickVoltar, termoObrigatorio = _a.termoObrigatorio;
    var sessionRef = React.useRef();
    var _d = React.useState(), sessionStatus = _d[0], setSessionStatus = _d[1];
    var _e = React.useState(''), mensagemErro = _e[0], setMensagemErro = _e[1];
    var _f = React.useState(false), mostrarConfirmacaoFinalizacao = _f[0], setMostrarConfirmacaoFinalizacao = _f[1];
    var _g = React.useState(true), videoPaciente = _g[0], setVideoPaciente = _g[1];
    var _h = React.useState(videoSources.CAMERA), videoSource = _h[0], setVideoSource = _h[1];
    var _j = React.useState(false), medicoConectado = _j[0], setMedicoConectado = _j[1];
    var _k = React.useState(false), noDevice = _k[0], setNoDevice = _k[1];
    var _l = React.useState(true), audioPaciente = _l[0], setAudioPaciente = _l[1];
    var _m = React.useState([]), messages = _m[0], setMessages = _m[1];
    var _o = React.useState(false), chatOpen = _o[0], setChatOpen = _o[1];
    var _p = React.useState(false), pictureInPictureEnabled = _p[0], setPictureInPictureEnabled = _p[1];
    var _q = React.useState(''), streamIdVideo = _q[0], setStreamIdVideo = _q[1];
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
        var isTextType = typeof msg === 'string';
        (_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.signal({
            type: isTextType ? 'text-chat' : 'file-chat',
            data: JSON.stringify(__assign(__assign({}, (isTextType ? { text: msg } : { file: JSON.stringify(msg) })), { sender: {
                    alias: getPrimeiroNome(publisherIsPaciente() ? currentUserName : chamadaEmAndamento.subscriberName),
                }, sentOn: new Date().getTime() })),
        });
    };
    var onToggleScreenSharing = function () {
        var screenSharingOption = videoSource === videoSources.CAMERA
            ? videoSources.SCREEN
            : videoSources.CAMERA;
        appLog && appLog('onToggleScreenSharing', screenSharingOption);
        setVideoSource(screenSharingOption);
    };
    var onEndCall = function (e) {
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
            return "Dr(a). " + getPrimeiroNome(chamadaEmAndamento.subscriberName);
        }
        return chamadaEmAndamento.subscriberName;
    };
    var sessionEventHandlers = {
        streamCreated: function (event) {
            var _a = event.stream, streamId = _a.streamId, videoType = _a.videoType;
            if (videoType === 'camera') {
                setStreamIdVideo(streamId);
            }
        },
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
            breadcrumb({
                message: "cliente " + (idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto') + " conectou na sess\u00E3o",
                category: 'telemedicina'
            });
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
            breadcrumb({
                message: "cliente " + (idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto') + " desconectou da sess\u00E3o",
                category: 'telemedicina',
                level: Sentry.Severity.Warning
            });
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
            breadcrumb({
                message: "cliente " + (idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto') + " reconectou na sess\u00E3o",
                category: 'telemedicina',
                level: Sentry.Severity.Warning
            });
            setSessionStatus(RECONNECTED);
        },
        sessionReconnecting: function (event) {
            appLog && appLog('<OTSession /> sessionReconnecting', event);
            setSessionStatus(RECONNECTING);
        },
        signal: function (event) {
            var _a, _b;
            appLog && appLog('<OTSession /> signal', event);
            if ((event === null || event === void 0 ? void 0 : event.data) && (event === null || event === void 0 ? void 0 : event.type) === SIGNAL_TYPE_TEXT) {
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
            if ((event === null || event === void 0 ? void 0 : event.data) && (event === null || event === void 0 ? void 0 : event.type) === SIGNAL_TYPE_FILE) {
                var eventData = JSON.parse(event === null || event === void 0 ? void 0 : event.data);
                var file = JSON.parse(eventData === null || eventData === void 0 ? void 0 : eventData.file);
                var myConnectionId = (_b = sessionRef.current) === null || _b === void 0 ? void 0 : _b.sessionHelper.session.connection.connectionId;
                var itsMe = (event === null || event === void 0 ? void 0 : event.from.connectionId) === myConnectionId;
                var newMessage_2 = itsMe
                    ? { me: true, label: 'Eu', file: file }
                    : {
                        me: false,
                        label: subscriberNameResolver(),
                        file: file,
                    };
                setMessages(function (m) { return __spreadArrays(m, [newMessage_2]); });
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
        },
        onAccessDenied: function (event) {
            appLog && appLog("<OTPublisher /> onAccessDenied", event);
            var streamId = event.target.streamId;
            if (!streamId) {
                setNoDevice(true);
                setVideoPaciente(false);
                setMensagemErro('Para iniciar a chamada de vídeo, é necessário permitir acesso à camera do dispositivo.');
            }
            if (streamId !== streamIdVideo && event.cancelable) {
                event.preventDefault();
                setStreamIdVideo('');
                setVideoSource(videoSources.CAMERA);
            }
        },
        onMediaStopped: function (event) {
            var stream = event.target.stream;
            if (stream && stream.videoType === 'screen' && event.cancelable) {
                event.preventDefault();
                onToggleScreenSharing();
            }
        }
    };
    React.useEffect(function () {
        if (sessionStatus === CONNECTION_DESTROYED && (termoObrigatorio && !recusouTermo)) {
            setMensagemErro('Chamada finalizada');
        }
    }, [sessionStatus]);
    React.useEffect(function () {
        var _a;
        if (termoObrigatorio && recusouTermo) {
            appLog && appLog('Finalizando chamada de telemedicina');
            sessionRef.current && ((_a = sessionRef.current) === null || _a === void 0 ? void 0 : _a.sessionHelper.session.disconnect(chamadaEmAndamento.codigoSessao));
            appLog && appLog('Chamada finalizada com sucesso');
            setMensagemErro('Para iniciar a chamada, é preciso aceitar o termo de comparecimento');
        }
    }, [recusouTermo]);
    if (mensagemErro) {
        return React__default['default'].createElement(CardErro, { onClickVoltar: onClickVoltar }, mensagemErro);
    }
    if (!chamadaEmAndamento) {
        return React__default['default'].createElement(CardErro, { onClickVoltar: onClickVoltar }, "Nenhuma chamada em andamento");
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
                onTogglePictureInPicture && onTogglePictureInPicture(true);
                subscriberVideo.addEventListener('leavepictureinpicture', function () {
                    setPictureInPictureEnabled(false);
                    onTogglePictureInPicture && onTogglePictureInPicture(false);
                });
            })
                .catch(function (error) {
                console.log('Request picture-in-picture failed');
            });
        }
    };
    var GlobalStyle = styled.createGlobalStyle(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    div.OT_video-poster {\n      z-index: 0;\n      display: block !important;\n    }\n  "], ["\n    div.OT_video-poster {\n      z-index: 0;\n      display: block !important;\n    }\n  "])));
    var Wrapper = opentokReact.OTSession;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(GlobalStyle, null),
        React__default['default'].createElement(ConfirmationModal, { title: "Finalizar", isOpen: mostrarConfirmacaoFinalizacao, onCancelar: function () {
                setMostrarConfirmacaoFinalizacao(false);
            }, onConfirmar: onEndCall, toggleModal: function () { return null; } }, "Deseja realmente finalizar a chamada?"),
        React__default['default'].createElement(ContainerTelemedicina, null,
            React__default['default'].createElement(Wrapper, { ref: sessionRef, apiKey: getTokboxApiKey(), sessionId: chamadaEmAndamento.codigoSessao, token: publisherIsPaciente() ? chamadaEmAndamento.tokenPaciente : chamadaEmAndamento.tokenMedico, onError: onError, eventHandlers: sessionEventHandlers },
                !pictureInPictureEnabled && (React__default['default'].createElement(StreamMedico, __assign({}, streamMedicoHandlers, { nomeSubscriber: subscriberNameResolver() }))),
                React__default['default'].createElement(StreamPaciente, __assign({}, streamPacienteHandlers, { noDevice: noDevice, videoEnabled: videoPacienteEnabled(), onToggleVideo: onToggleVideo, audioEnabled: audioPacienteEnabled(), onToggleAudio: onToggleAudio, sharingScreen: videoSource === videoSources.SCREEN, nomePublisher: getPrimeiroNome(currentUserName, 10), videoSource: videoSource })),
                !pictureInPictureEnabled && (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(BarraOpcoes, { chatOpen: chatOpen, onToggleChat: onToggleChat, sharingScreen: videoSource === videoSources.SCREEN, onToggleScreenSharing: onToggleScreenSharing, onEndCall: onMostrarConfirmacaoFinalizacao, disabled: termoObrigatorio && !chamadaEmAndamento.aceitouTermoComparecimento, isPictureInPictureEnabled: isPictureInPictureEnabled, onClickPictureInPicture: pictureInpictureRequest }),
                    React__default['default'].createElement(Chat, { open: chatOpen, messages: messages, onMessage: onSendMessage, disabled: !medicoConectado || (termoObrigatorio && !chamadaEmAndamento.aceitouTermoComparecimento), onSelectFileUpload: onSelectFileUpload, uploadDisabled: uploadDisabled })))),
            React__default['default'].createElement(TagVersion, null, "v" + version))));
};
var templateObject_1$9, templateObject_2$7, templateObject_3$2;

module.exports = VideoSession;
