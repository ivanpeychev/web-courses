import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { NoSuchPageViewComponent } from './no-such-page-view/no-such-page-view.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    data: { title: 'Home' }
  },
  {
    path: 'catalog',
    component: FooterComponent,
    data: { title: 'Catalog' }
  },
  {
    path: 'users',
    component: FooterComponent,
    data: { title: 'Users' }
  },
  {
    path: 'contacts',
    component: ContactsViewComponent,
    data: { title: 'Contacts' }
  },
  { path: '**', component: NoSuchPageViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeViewComponent,
    NoSuchPageViewComponent,
    UsersViewComponent,
    CatalogViewComponent,
    ContactsViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
