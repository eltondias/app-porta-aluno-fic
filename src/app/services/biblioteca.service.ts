import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { createRequestOption } from './request-util';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  public resourceUrl =  environment.URL_API  + 'biblioteca';

  constructor(protected http: HttpClient) {}
  
  consultaracervo(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/consultaracervo', { params: options, observe: 'response' });
  }

  getObra(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/obra', { params: options, observe: 'response' });
  }
}
