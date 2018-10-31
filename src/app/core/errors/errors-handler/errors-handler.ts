
import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ErrorsService } from '../errors-service/errors.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorsService = this.injector.get(ErrorsService);
    const router = this.injector.get(Router);
    console.info('error', error)
    if (error instanceof HttpErrorResponse) {      
      if (!navigator.onLine) {
        // Sem conexão com a internet
        // return notificationService.notify('Sem conexão com a internet');
      }
      errorsService.log(error).subscribe();
      // return notificationService.notify(`${error.status} - ${error.message}`);
    } else if(error && error.stack && error.message) {
      errorsService
          .log(error)
          .subscribe(errorWithContextInfo => {
            router.navigate(['/error'], { queryParams: errorWithContextInfo });
          });
    }else{
      // return notificationService.notify(error);
      return;
    }
  }
}

