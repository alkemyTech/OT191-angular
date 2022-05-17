import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: "root"
})

export class loginGuardian implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}
    
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.verifyAuth().pipe(map(res=>{
            if (res.success){
                this.router.navigate(["/"]);
            }
            return !!res.success;
        }))
	}
}
