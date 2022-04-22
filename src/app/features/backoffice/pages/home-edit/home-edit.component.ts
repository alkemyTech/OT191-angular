import { Component, Input } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AlertService } from "src/app/core/services/alert.service";
import { HomeProviderService } from '../../../public/services/providers/home-provider.service';
import { Slide } from '../../../../core/models/slides.model';

@Component({
  selector: "app-home-edit",
  templateUrl: "./home-edit.component.html",
  styleUrls: ["./home-edit.component.scss"],
})
export class HomeEditComponent {
  @Input() homeTxt: string = "";

  @Input() homeSlides: any[] = [];

  slides: Slide[] = [];

  selectedSlides: any[] = [];

  loading = false;

  editHomeForm: FormGroup = this.fb.group({
    text: ["", [Validators.required, Validators.minLength(20)]],
    newSlides: this.fb.array(
      [],
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
    ),
  });
  
  constructor(
    private alerts: AlertService,
    private fb: FormBuilder,
    private homeP: HomeProviderService
  ) {
    this.homeP.getSlides().subscribe((slides) => {
      this.slides = slides;
    });
  }

  isInvalid(value: string) {
    return (
      this.editHomeForm.controls[value].errors &&
      this.editHomeForm.controls[value].touched
    );
  }

  onSubmit() {
    if (this.editHomeForm.invalid) {
      this.editHomeForm.markAllAsTouched();
      return;
    }
    this.loading = true;

    this.homeTxt = this.editHomeForm.controls["text"].value;
    this.homeSlides = this.selectedSlides;

    this.alerts.alertNotification(
      "Éxito",
      "Se ha modificado la página de inicio",
      "success"
    );

    this.loading = false;
    this.editHomeForm.reset();
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.editHomeForm.get(
      "newSlides"
    ) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.id));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.id) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
