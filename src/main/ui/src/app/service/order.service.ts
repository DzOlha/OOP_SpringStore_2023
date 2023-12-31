import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderWriteDto, OrderReadDto } from '../shared/dto/order';
import { OrderStatus } from '../shared/enum';
import { AppSettings } from '../app-settings';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private httpClient: HttpClient) { }

  getAllOrdersByUserId(id: number): Observable<OrderReadDto[]> {
    return this.httpClient.get<OrderReadDto[]>(AppSettings.API_ENDPOINT + '/orders/' + id);
  }

  getAllOrders(): Observable<OrderReadDto[]> {
    return this.httpClient.get<OrderReadDto[]>(AppSettings.API_ENDPOINT + '/orders');
  }

  checkout(order: OrderWriteDto): Observable<any> {
    return this.httpClient.post('http://localhost:8081/orders', order).pipe();
  }

  changeStatus(newStatus: OrderStatus, orderId: number): Observable<any> {
    return this.httpClient.patch<any>(`http://localhost:8081/orders/${orderId}?status=${newStatus}`, {}).pipe();
  }
}
