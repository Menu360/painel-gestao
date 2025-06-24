import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(protected httpClient: HttpClient) { }

  listaProduto (): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>('https://menu360-backend-develop.up.railway.app/produto/listar');
  }
}

