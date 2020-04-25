import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyEventsService } from './services/my-events.service';
import { EventsService } from './services/events.service';
import { CategoriesService } from './services/categories.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsComponent } from './components/events/events/events.component';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';
import { JoinedEventsComponent } from './components/events/joined-events/joined-events.component';
import { PostEventComponent } from './components/users-events/post-event/post-event.component';
import { CreatedEventsComponent } from './components/users-events/created-events/created-events.component';
import { ManageEventComponent } from './components/users-events/manage-event/manage-event.component';
import { EditEventComponent } from './components/users-events/edit-event/edit-event.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptor } from './services/auth-interceptor';
import { AuthGuard } from './guards/auth.guard';


//REMOVE
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ShareButtonsConfig, ShareModule } from '@ngx-share/core';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { SocialShareComponent} from './components/social.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    EventsComponent,
    EventDetailComponent,
    JoinedEventsComponent,
    PostEventComponent,
    CreatedEventsComponent,
    ManageEventComponent,
    EditEventComponent,
    HeaderComponent,
    SocialShareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ShareButtonsModule,
    FontAwesomeModule,
    ShareModule.withConfig()
  ],
  providers: [AuthService,CategoriesService,EventsService,MyEventsService,AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
