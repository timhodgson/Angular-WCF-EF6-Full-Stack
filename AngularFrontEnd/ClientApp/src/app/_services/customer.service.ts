import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from '../_models';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


// User service that communicates with back-end API
@Injectable({ providedIn: 'root' })
export class CustomerService {
    public static ROOT_URL = 'http://localhost:53472/Service/WCFService.svc';

    constructor(private http: HttpClient) { }

    // Get a customer based on the id
    getCustomerById(id: number) {
        return this.http.get<Customer>(`${CustomerService.ROOT_URL}/customers/GetAllCustomers/${id}`);
    }

    getCustomers(): any {
        return this.http.get<Array<Customer>>(`${CustomerService.ROOT_URL}/customers/GetAllCustomers`);
    }

    // Register a new user
    register(id: number, customer: Customer) {
        return this.http.post(`${CustomerService.ROOT_URL}/customers/Add`, customer);
    }
/*
    // Delete a user
    delete(id: number) {
        return this.http.delete(`${UserService.ROOT_URL}/customers/DeleteCustomer/${id}`);
    }
    */
}
