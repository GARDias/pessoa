import { CrudService } from './crud.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

export class BaseService<T, ID> extends CrudService<T, ID> {

    constructor(baseUrl: string, http: HttpClient) {
        super(baseUrl, http);
    }

    get(urlComplemento?: string, options?: { headers: HttpHeaders }) {
        this.resolveOptions(options);
        let complemento = urlComplemento !== undefined ? urlComplemento : '';
        return this.http.get(this.base + complemento, options).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    post(t: T, urlComplemento?: string, options?: { headers: HttpHeaders }) {
        this.resolveOptions(options);
        let complemento = urlComplemento !== undefined ? urlComplemento : '';
        return this.http.post(this.base + complemento, t, options)
            .pipe(
                map(this.extractData),
                catchError(this.handleError)
            );
    }

    private resolveOptions(options) {
        if (options === null) {
            this.options = options;
        }
    }

}