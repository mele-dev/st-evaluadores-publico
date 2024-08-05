import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from './auth/users.service';
import { User } from './auth/User';
import { Notification } from './shared/services/notification-service/Inotification';
import { NotificationService } from './shared/services/notification-service/notifications.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', // tiene que estar igual que en el explorer
})
export class AppComponent implements OnInit {

  title = 'Evaluadores';

  production = environment.production;

  notifications: Notification[] = [];

  private alertaService = inject(NotificationService)
  private userService = inject(UsersService);
  private router = inject(Router);

  async ngOnInit(): Promise<void> {
    try {
      await this.userService.doLocalStorageLogin();
      if (this.userService.ultimaRuta) {
        this.router.navigate([this.userService.ultimaRuta]);
      }
    } catch (error: any) {
      console.info(error.message);
    }

    this.notifications = this.alertaService.notifications()
  }

  get user() {
    return this.userService.user;
  }

  removeAlerta(_t3: Notification) {
    this.alertaService.removeNotification(_t3);
  }


}

