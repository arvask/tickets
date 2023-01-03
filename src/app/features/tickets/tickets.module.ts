import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TicketsComponent } from './tickets/tickets.component';
import { MatButtonModule } from "@angular/material/button";
import { TicketStoreModule } from "../../store/ticket-store/ticket-store.module";
import {GridComponent} from "@shared/components";



const routes: Routes = [
  {
    path: '',
    component: TicketsComponent
  }
];

@NgModule({
  declarations: [
    TicketsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    TicketStoreModule,
      GridComponent

  ]
})
export class TicketsModule { }

