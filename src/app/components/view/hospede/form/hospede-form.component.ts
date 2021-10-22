import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospede } from 'src/app/model/Hospede.model';
import { HospedeService } from 'src/app/service/hospede.service';

@Component({
  selector: 'app-hospede-form',
  templateUrl: './hospede-form.component.html',
  styleUrls: ['./hospede-form.component.css']
})
export class HospedeFormComponent implements OnInit {

  title: string = "Cadastrar Hóspede";
  saveButton: string = "Cadastrar";

  hospede: Hospede = {
    nmHospede: "",
    dtNascimento: new Date(),
    cpf: 0
  }

  constructor(private service: HospedeService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() : void {
    this.service.insert(this.hospede).subscribe(() => {
      this.service.showMessage("Hóspede cadastrado com sucesso!")
      this.router.navigate(['/hospedes']);
    });
  }
}
