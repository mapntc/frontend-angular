import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospede } from 'src/app/model/Hospede.model';
import { HospedeService } from 'src/app/service/hospede.service';

@Component({
  selector: 'app-hospede-update',
  templateUrl: './../hospede-form/hospede-form.component.html',
  styleUrls: ['./../hospede-form/hospede-form.component.css']
})
export class HospedeUpdateComponent implements OnInit {

  title: string = "Atualizar Hóspede";
  saveButton: string = "Atualizar";

  hospede: Hospede = {
    nmHospede: "",
    dtNascimento: new Date(),
    cpf: 0
  }

  constructor(private route: ActivatedRoute, private service: HospedeService,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      throw new Error("ID é nulo");
    }

    this.service.findById(id).subscribe(hospede => {
      this.hospede = hospede;
    })
  }

  cadastrar() : void {
    this.service.update(this.hospede).subscribe(() => {
      this.service.showMessage("Hóspede atualizado com sucesso!")
      this.router.navigate(['/hospedes']);
    });
  }

}
