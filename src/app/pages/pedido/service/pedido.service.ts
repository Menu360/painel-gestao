import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(protected httpClient: HttpClient) { }

  listaPedido (): Observable<Pedido[]>{
    return this.httpClient.get<Pedido[]>('https://menu360-backend-develop.up.railway.app/pedido');
  }
}

