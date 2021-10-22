import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Hospedagem } from '../model/Hospedagem.model';

@Injectable({
  providedIn: 'root'
})
export class HospedagemService {

  baseUrl: string = "http://localhost:8080/hospedagens";
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false) : void {
    this.snackBar.open(msg, "Fechar", {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  insert(hospedagem: Hospedagem) : Observable<Hospedagem> {
    return this.http.post<Hospedagem>(this.baseUrl, hospedagem, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}});
  }


  findAll() : Observable<Hospedagem[]> {
    return this.http.get<Hospedagem[]>(this.baseUrl, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}})
  }

  findById(id: string) : Observable<Hospedagem> {
    return this.http.get<Hospedagem>(this.baseUrl + `/${id}`, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}});
  }

  update(hospedagem: Hospedagem) : Observable<Hospedagem> {
    return this.http.put<Hospedagem>(this.baseUrl, hospedagem, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}});
  }

  delete(hospedagem: Hospedagem) : Observable<Hospedagem> {
    return this.http.delete<Hospedagem>(this.baseUrl + `/${hospedagem.idHospedagem}`, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}});
  }
}
