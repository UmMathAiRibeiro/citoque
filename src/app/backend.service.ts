import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'http://localhost:3005'; // DEV

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(private http: Http) {

    }
    // LOGIN-----------------------------------------------\\
    logar(data) {
        return this.http.post(URL + '/login', data);
    }
    // ----------------------------------------------------\\

    // EVENTO---------------------------------------------\\
    cadastroEvento(data) {
        console.log(data);
        return this.http.post(URL + '/cadastroEvento', data);
    }
    deleteEvento(id) {
        return this.http.delete(`${URL}/deleteEvento/${id}`);
    }
    selectEventosFiec1() {
        return this.http.get(URL + '/selectEventosFiec1');
    }
    selectEventosFiec2() {
        return this.http.get(URL + '/selectEventosFiec2');
    }
    // ----------------------------------------------------\\

    // CANDIDATURA----------------------------------------\\
    candidaturaTCC(data) {
        return this.http.post(URL + '/candidaturaTCC', data);
    }
    candidaturaINTERNO(data) {
        return this.http.post(URL + '/candidaturaINTERNO', data);
    }
    candidaturaEXTERNO(data) {
        return this.http.post(URL + '/candidaturaEXTERNO', data);
    }
    // ----------------------------------------------------\\

    // AVALIAÇÃO-------------------------------------------\\
    selectTcc() {
        return this.http.get(URL + '/selectTcc');
    }
    selectExterno() {
        return this.http.get(URL + '/selectExterno');
    }
    selectInterno() {
        return this.http.get(URL + '/selectInterno');
    }
    selectTccEmDesenvolvimento() {
        return this.http.get(URL + '/selectTccEmDesenvolvimento');
    }
    selectExternoEmDesenvolvimento() {
        return this.http.get(URL + '/selectExternoEmDesenvolvimento');
    }
    selectInternoEmDesenvolvimento() {
        return this.http.get(URL + '/selectInternoEmDesenvolvimento');
    }
    selectTccEmRevisao() {
        return this.http.get(URL + '/selectTccEmRevisao');
    }
    selectExternoEmRevisao() {
        return this.http.get(URL + '/selectExternoEmRevisao');
    }
    selectInternoEmRevisao() {
        return this.http.get(URL + '/selectInternoEmRevisao');
    }
    deleteTcc(id) {
        return this.http.delete(`${URL}/deleteTcc/${id}`);
    }
    deleteInterno(id) {
        return this.http.delete(`${URL}/deleteInterno/${id}`);
    }
    deleteExterno(id) {
        return this.http.delete(`${URL}/deleteExterno/${id}`);
    }
    aproveTcc(id) {
        return this.http.put(URL + '/aproveTcc', id);
    }
    aproveExterno(id) {
        return this.http.put(URL + '/aproveExterno', id);
    }
    aproveInterno(id) {
        return this.http.put(URL + '/aproveInterno', id);
    }
    revisaoTcc(data) {
        return this.http.put(URL + '/revisaoTcc', data);
    }
    revisaoExterno(data) {
        return this.http.put(URL + '/revisaoExterno', data);
    }
    revisaoInterno(data) {
        return this.http.put(URL + '/revisaoInterno', data);
    }
    reenviarTcc(data) {
        return this.http.put(URL + '/reenviarTcc', data)
    }
    reenviarExterno(data) {
        return this.http.put(URL + '/reenviarExterno', data)
    }
    reenviarInterno(data) {
        return this.http.put(URL + '/reenviarInterno', data)
    }
    // ----------------------------------------------------\\
}
