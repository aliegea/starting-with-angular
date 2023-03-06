import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface CanDeactivateForm{
  canDeactivate:()=>
  |Observable<boolean>
  |Promise<boolean>
  |boolean
}
@Injectable({
  providedIn:'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateForm>{
  canDeactivate(component: CanDeactivateForm, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot):Observable<boolean>  | Promise<boolean> |boolean {
return component.canDeactivate? component.canDeactivate():true;
  }

}
