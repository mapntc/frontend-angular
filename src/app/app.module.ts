import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HospedagemFormComponent } from './components/view/hospedagem/form/form.component';
import { ConfirmDeleteComponent } from './components/template/confirm-delete/confirm-delete.component';
import { HospedagemListComponent } from './components/view/hospedagem/list/list.component';
import { HospedagemUpdateComponent } from './components/view/hospedagem/update/update.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HospedeFormComponent } from './components/view/hospede/form/hospede-form.component';
import { HospedeUpdateComponent } from './components/view/hospede/update/hospede-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    HospedagemUpdateComponent,
    HospedagemFormComponent,
    HospedagemListComponent,
    ConfirmDeleteComponent,
    HospedeFormComponent,
    HospedagemListComponent,
    HospedeUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
