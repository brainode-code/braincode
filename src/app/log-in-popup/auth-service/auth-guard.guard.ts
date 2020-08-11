import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private _router: Router,
              private _AuthService: AuthService) {}

    canActivate(): boolean | Promise<boolean> {
      return !!this._AuthService ? this._router.navigate(['/login']) : false; 
    }
  
}
