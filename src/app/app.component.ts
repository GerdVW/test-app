import { Component } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [NotificationsService]
})
export class AppComponent {
  title = 'testing-app';

 constructor(private notificationService: NotificationsService) {}

  buttonClicked() {
    this.notificationService.alert('TestTitle', 'TestMessage', null, null);
  }

}
