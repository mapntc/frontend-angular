import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from 'src/app/components/template/confirm-delete/confirm-delete.component';
import { Hospedagem } from 'src/app/model/Hospedagem.model';
import { HospedagemService } from 'src/app/service/hospedagem.service';

@Component({
  selector: 'app-hospedagem-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class HospedagemListComponent implements OnInit {

  hospedagens: Hospedagem[] = [];
  displayedColumns: string[] = ["ID", "Número do Quarto", "Nome do Hóspede", "Checkin", "Checkout", "Ação"];

  constructor(private service: HospedagemService, private dialog: MatDialog) { }

  atualizarDados() : void {
    this.service.findAll().subscribe(hospedagens => {
      this.hospedagens = hospedagens;
    })
  }

  ngOnInit(): void {
    this.atualizarDados();
  }

  excluir(hospedagem: Hospedagem) : void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        message: `Deseja excluir a hospedagem ${hospedagem.idHospedagem}?`
      }
    })

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if(confirm) {
        this.service.delete(hospedagem).subscribe(() => {
          this.service.showMessage("Hospedagem excluída com sucesso");
          this.atualizarDados();
        })
      }
    })
  }
}
