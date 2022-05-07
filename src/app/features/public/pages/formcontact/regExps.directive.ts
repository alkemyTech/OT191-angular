import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function mailValidator(nameRe: RegExp): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const formatMail = nameRe.test(control.value);
		return formatMail ? null : { mailFormat: { value: control.value } };
	};
}

export function phoneValidator(nameRe: RegExp): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const formatMail = nameRe.test(control.value);
		return formatMail ? null : { phoneFormat: { value: control.value } };
	};
}
