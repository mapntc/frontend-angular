import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospedagem } from 'src/app/model/Hospedagem.model';
import { HospedagemService } from 'src/app/service/hospedagem.service';

@Component({
  selector: 'app-hospedagem-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class HospedagemFormComponent implements OnInit {

  title: string = "Cadastrar Hospedagem";
  saveButton: string = "Cadastrar";

  hospedagem: Hospedagem = {
    quarto: {
      idQuarto: 0
    },
    hospede: {
      idHospede: 0
    },
    dtCheckin: new Date(),
    dtCheckout: new Date()
  }
  constructor(private service: HospedagemService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() : void {
    this.service.insert(this.hospedagem).subscribe(() => {
      this.service.showMessage("Hospedagem cadastrada com sucesso!")
      this.router.navigate(['/hospedagens']);
    });
  }
}
