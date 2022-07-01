import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { SignatureComponent } from './signature/signature.component';
import { PlanningComponent } from './planning/planning.component';
import { ModuleDetailsComponent } from './module-details/module-details.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleComponent } from './module/module.component';
import { ModalPlanningComponent } from './modal-planning/modal-planning.component';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'signature', component: SignatureComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'modules', component: ModuleListComponent},
  { path: 'module', component: ModuleComponent},
  { path: 'modules/:id', component: ModuleDetailsComponent},
  { path: 'popup', component: ModalPlanningComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
