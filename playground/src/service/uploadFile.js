import api, { extractData } from './index';

export const uploadFileService = async (idAtendimento, ...arquivos) => {
    return await api
    .post(`/me/atendimentos/${idAtendimento}/mensagem`, {arquivos}).then((res) => {
        const { arquivos } = extractData(res).data;
        return arquivos;
    }).catch((error) => {
        return error;
    });
}