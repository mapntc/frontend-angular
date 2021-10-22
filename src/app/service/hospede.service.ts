import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Hospede } from '../model/Hospede.model';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  baseUrl: string = "http://localhost:8080/hospedes";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false) : void {
    this.snackBar.open(msg, "Fechar", {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  insert(hospede: Hospede) : Observable<Hospede> {
    return this.http.post<Hospede>(this.baseUrl, hospede, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}});
  }


  findAll() : Observable<Hospede[]> {

    return this.http.get<Hospede[]>(this.baseUrl, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}})
  }

  findById(id: string) : Observable<Hospede> {
    return this.http.get<Hospede>(this.baseUrl + `/${id}`, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}});
  }

  update(hospede: Hospede) : Observable<Hospede> {
    return this.http.put<Hospede>(this.baseUrl, hospede, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}});
  }

  delete(hospede: Hospede) : Observable<Hospede> {
    return this.http.delete<Hospede>(this.baseUrl + `/${hospede.idHospede}`, {headers: {["Authorization"]: "Basic ZWxpYXM6MTIzNDU2"}});
  }
}
