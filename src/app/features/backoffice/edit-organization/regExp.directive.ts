import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function urlValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formatUrl = nameRe.test(control.value);
      return formatUrl? null: {formatUrl: {value: control.value}} ;
    };
  }