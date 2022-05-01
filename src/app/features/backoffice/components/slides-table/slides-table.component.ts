import { Component, Input, ViewChild, } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Slide } from 'src/app/core/models/slides.model';
import { Table } from "primeng/table";
import { AlertService } from "../../../../core/services/alert.service";

import { SlideProviderService } from '../../services/providers/slidesController/slide-provider.service';
@Component({
  selector: 'app-slides-table',
  templateUrl: './slides-table.component.html',
  styleUrls: ['./slides-table.component.scss']
})
export class SlidesTableComponent {
  @Input() slides!: Slide[] | null;

  productDialog: boolean = false;

  slide!: Partial<Slide>;

  selectedSlides!: Slide[];

  submitted: boolean = false;

  order: any[] = [
    { label: "Primero", value: 1 },
    { label: "Segundo", value: 2 },
    { label: "Tercero", value: 3 },
  ];

  stylesDialog = { width: '400px', height: '500px' };

  @ViewChild("dt") dt: Table | undefined;
  // filtro para el buscador de una columna
  applyFilter($event: any, stringVal: any) {
    this.dt!.filter(
      ($event.target as HTMLInputElement).value,
      stringVal,
      "contains"
    );
  }

  constructor(
    private messageService: MessageService,
    private alerts: AlertService,
    private slideP: SlideProviderService
  ) {}

  editSlide(slide: Slide) {
    this.productDialog = true;
    this.slide = { ...slide };
  }

  deleteSelectedSlides() {
    this.alerts
      .alertQuestion(
        "Borrar",
        "¿Seguro que quieres borrar todos los usuarios marcados?",
        "warning"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          this.messageService.add({
            severity: "success",
            summary: "Éxito",
            detail: "Se han eliminado los usuarios",
          });

          this.slides = this.slides!.filter(
            (val) => !this.selectedSlides.includes(val)
          );
          this.selectedSlides.forEach((slide) => {
            this.slideP.deleteSlide(slide.id.toString()).subscribe();
          });
          this.selectedSlides = [];
        }
      });
  }

  deleteSlide(user: Slide) {
    this.alerts
      .alertQuestion(
        "Borrar",
        "¿Seguro que quieres borrar este usuario?",
        "warning"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          this.slides = this.slides!.filter((val) => val.id !== user.id);
          this.slide = {};

          this.slideP.deleteSlide(user.id.toString()).subscribe({
            next: (data) => {
              this.messageService.add({
                severity: "error",
                summary: "Se eliminó",
                detail: "Se ha eliminado el usuario",
                life: 3000,
              });
            },
            error: (err) => {
              this.alerts.alertNotification(
                "Error",
                err.error.message,
                "error"
              );
              return;
            },
          });
        }
      });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  async saveSlide() {
    this.submitted = true;

    this.slides![this.findIndexById(this.slide.id!)] = this.slide as Slide;

    this.slideP.updateSlide(this.slide.id!.toString(), this.slide).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: "success",
          summary: "Éxito",
          detail: "Se ha actualizado el usuario",
          life: 3000,
        });
      },
      error: (err) => {
        this.alerts.alertNotification("Error", err.error.message, "error");
        return;
      },
    });

    this.slides = [...this.slides!];
    this.productDialog = false;
    this.slide = {};
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.slides!.length; i++) {
      if (this.slides![i].id == id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
