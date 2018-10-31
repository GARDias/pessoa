import { Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, Event, NavigationError } from '@angular/router';

import { Observable, throwError, of } from 'rxjs';

@Injectable()
export class ErrorsService {

  constructor(
    private injector: Injector,
    private router: Router,
  ) {
    this.router
      .events
      .subscribe((event: Event) => {
        if (event instanceof NavigationError) {
          this.log(event.error)
            .subscribe((errorWithContext) => {
              this.router.navigate(['/error'], { queryParams: errorWithContext })
            });
        }
      });
  }

  log(error) {
    // Logar erro
    // console.error(error);
    // Enviar ao servidor caso necessário
    const errorToSend = this.addContextInfo(error);
    return fakeHttpService.post(errorToSend);
  }

  addContextInfo(error) {
    const name = error.name || null;
    const appId = 'shthppnsApp';
    const user = 'ShthppnsUser';
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();

    const stack = error instanceof HttpErrorResponse ? null : this.parseStack(error);

    return { name, appId, user, time, id, url, status, message, stack };
  }


  parseStack(error) {
    return error.stack[0];
  }

}

class fakeHttpService {
  static post(error): Observable<any> {
    // console.log('Error sent to the server: ', error);
    return of(error);
    // return throwError(error)
  }
}
