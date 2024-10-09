import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {
  private apiUrl = 'http://localhost:8080/api/ordens-servico'; // URL do back-end

  constructor(private http: HttpClient) { }

  criarOrdemServico(ordemServico: any): Observable<any> {
    return this.http.post(this.apiUrl, ordemServico);
  }
}
