import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { MatDialogModule } from "@angular/material/dialog";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { StatusCellRendererComponent } from "./shared/components/cell-components/status-cell-renderer/status-cell-renderer.component";
import { IDCellRendererComponent } from "./shared/components/cell-components/id-cell-renderer/id-cell-renderer.component";
import { ActionCellRendererComponent } from "./shared/components/cell-components/action-cell-renderer/action-cell-renderer.component";
import { TextCellRendererComponent } from "./shared/components/cell-components/text-cell-renderer/text-cell-renderer.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        AppComponent,
        StatusCellRendererComponent,
        IDCellRendererComponent,
        ActionCellRendererComponent,
        TextCellRendererComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument({maxAge: 55}),
        MatDialogModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
