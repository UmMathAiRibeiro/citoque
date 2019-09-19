import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

const URL = 'http://localhost:3005' //DEV

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    constructor(private http: Http) {

    }
    //LOGIN\\
    logar(data) {
        return this.http.post(URL + '/login', data)
    }
    //----------------------------------------------------\\
    // EVENTO---------------------------------------------\\
    cadastroEvento(data) {
        console.log(data);
        return this.http.post(URL + '/cadastroEvento', data)
    }
    deleteEvento(id) {
        return this.http.delete(`${URL}/deleteEvento/${id}`)
    }
    selectEventosFiec1() {
        return this.http.get(URL + '/selectEventosFiec1')
    }
    selectEventosFiec2() {
        return this.http.get(URL + '/selectEventosFiec2')
    }
    //----------------------------------------------------\\

}