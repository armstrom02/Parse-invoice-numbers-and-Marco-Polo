import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CharacterService } from './character.service';
import { ParseInvoiceComponent } from './parse-invoice/parse-invoice.component';
import { MarcoPoloComponent } from './marco-polo/marco-polo.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    ParseInvoiceComponent,
    MarcoPoloComponent,
    HomeComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'home', pathMatch: 'full'
        },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'question',
          component: QuestionComponent,
        },
        {
          path: 'parseinvoice',
          component: ParseInvoiceComponent,
        },
        {
          path: 'marcopolo',
          component: MarcoPoloComponent,
        },
        { path: '**', redirectTo: 'home' }
      ]
    )

  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
