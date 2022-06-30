import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { SignatureComponent } from './signature/signature.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'signature', component: SignatureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
