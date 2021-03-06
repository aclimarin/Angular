import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { ContatosModule } from './contatos/contatos.module';
import { DialogService } from './dialog.service';

@NgModule({
    imports: [        
        BrowserModule,
        ContatosModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)        
    ],
    declarations: [AppComponent],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}