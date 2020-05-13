import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ComponentHelperService {

  constructor() { }

  getUniqueID(): string {
    return uuidv4();
  }

  isDescendantOfByClass(element: any, className: string): boolean {
    if (element) {
      if (element.tagName === "BODY")
        return false;
      if (element.classList.contains(className))
        return true;
      return this.isDescendantOfByClass(element.parentNode, className);
    } else
      return false;
  }

  isDescendantOfById(element: any, id: string): boolean {
    if (element) {
      if (element.tagName === "BODY")
        return false;
      if (element.id === id)
        return true;
      return this.isDescendantOfById(element.parentNode, id);
    } else
      return false;
  }
}
