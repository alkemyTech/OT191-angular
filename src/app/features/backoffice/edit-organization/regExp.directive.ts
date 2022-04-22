import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function urlValidator(site: string): ValidatorFn {
	const nameRe = new RegExp("[a-zA-Z0-9./]{1,50}");
	return (control: AbstractControl): ValidationErrors | null => {
		if (String(control.value).includes(site)) {
			const start = String(control.value).indexOf(".com/") + 4;
			const end = String(control.value).length;
			const user = String(control.value).substring(start, end);
			const formatUrl = nameRe.test(user);
			return formatUrl ? null : { formatUrl: { value: control.value } };
		} else {
			return { formatUrl: { value: control.value } };
		}
	};
}
