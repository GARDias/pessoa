import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

export interface ICrudService<T, ID> {
    save(t: T): Observable<T>;
	update(id: ID, t: T): Observable<T>;
	findOne(id: ID): Observable<T>;
	findAll(): Observable<T[]>;
	delete(id: ID): Observable<any>;
} 