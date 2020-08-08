import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private _router: Router,
              private _AuthService: AuthService) {}

    canActivate(): boolean {
      if(this._AuthService.loggedIn()) {
        return true
      } else {
        this._router.navigate(['/login']);
        return false
      }
    }
  
}
