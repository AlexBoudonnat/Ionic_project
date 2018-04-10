import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyMoviesPageModule} from "../pages/my-movies/my-movies.module";
import {MovieListPageModule} from "../pages/movie-list/movie-list.module";
import {MovieDetailPageModule} from "../pages/movie-detail/movie-detail.module";
import { MovieApiProvider } from '../providers/movie-api/movie-api';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MyMoviesPageModule,
    MovieListPageModule,
    MovieDetailPageModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieApiProvider
  ]
})
export class AppModule {}
