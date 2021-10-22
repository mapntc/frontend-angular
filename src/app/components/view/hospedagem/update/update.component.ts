import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospedagem } from 'src/app/model/Hospedagem.model';
import { HospedagemService } from 'src/app/service/hospedagem.service';

@Component({
  selector: 'app-hospedagem-update',
  templateUrl: './../form/form.component.html',
  styleUrls: ['./../form/form.component.css']
})
export class HospedagemUpdateComponent implements OnInit {

  title: string = "Atualizar Hospedagem";
  saveButton: string = "Atualizar";

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

  constructor(private service: HospedagemService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      throw new Error("ID é nulo");
    }

    this.service.findById(id).subscribe(hospedagem => {
      this.hospedagem = hospedagem;
    })
  }

  cadastrar() : void {
    this.service.insert(this.hospedagem).subscribe(() => {
      this.service.showMessage("Hospedagem cadastrada com sucesso!")
      this.router.navigate(['/hospedagens']);
    });
  }

}
