import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Directive } from '@angular/core';
import { UserService } from '../services/user.service';


export function uniqueUsernameValidator(userService: UserService): AsyncValidatorFn {
    return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>=>{
        return userService.getUser(c.value).pipe(
            map(data => {
                return data ? { "uniqueUsername": true } : null;
            })
        )
    }

}

@Directive({
    selector: '[uniqueUsername]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true }]
})


export class UniqueUsernameValidatorDirective implements AsyncValidator {

    constructor(private userService: UserService) { }

    validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

        return this.userService.getUser(c.value).pipe(
            map(data => {
                return data ? { "uniqueUsername": true } : null;
            })
        );

    }
} 