import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class ContactService {

  private api = 'https://mailthis.to/ionuk';

  constructor(private http: HttpClient) { }

  public sendMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'})
      .pipe(
        map((response) => {
          if (response) {
            return response
          }
        },
          (error) => {
          return error;
          })
      )
  }
}

