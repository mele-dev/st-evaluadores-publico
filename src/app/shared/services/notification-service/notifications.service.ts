import { Injectable } from '@angular/core';

import { Notification, NotificationType } from './Inotification';

@Injectable({

  providedIn: 'root'

})

export class NotificationService {

  private _notifications: Notification[] = [

  ]

  public notifications(): Notification[] {

    const alertas = this._notifications;

    return alertas;

  }

  public addNotification(mensaje: string, tipo: NotificationType = NotificationType.Success) {

    this._notifications.push({

      message: mensaje,

      type: tipo

    });

  }

  public removeNotification(alerta: Notification) {

    const index = this._notifications.indexOf(alerta);

    this._notifications.splice(index, 1);

  }

}