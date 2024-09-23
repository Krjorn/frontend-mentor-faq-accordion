import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {
  getId(prefix: string): string {
    return `${prefix}-${uuidv4()}`;
  }
}
