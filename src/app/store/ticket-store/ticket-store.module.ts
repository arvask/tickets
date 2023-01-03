import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { ticketFeatureKey, ticketReducer } from "./ticket.reducer";
import { TicketEffect } from "./ticket.effect";
import { EffectsModule } from "@ngrx/effects";
import { TicketStoreFacade} from "./ticket-store.facade";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ticketFeatureKey, ticketReducer),
    EffectsModule.forFeature([TicketEffect]),
      HttpClientModule
  ],
    providers: [
        TicketStoreFacade
    ]
})
export class TicketStoreModule { }
