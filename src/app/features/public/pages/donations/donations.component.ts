import { Component, OnInit } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-donations",
  templateUrl: "./donations.component.html",
  styleUrls: ["./donations.component.scss"],
})
export class DonationsComponent implements OnInit {
  texto = "DONÁ";

  name = "Angular";
  formattedAmount: any;
  amount: any;
  constructor(private currencypipe: CurrencyPipe) {}

  donation = new FormGroup({
    donation: new FormControl("", Validators.required),
  });

  ngOnInit(): void {}

  transformAmount(element: any) {
    this.formattedAmount = this.currencypipe.transform(
      this.formattedAmount,
      "$"
    );

    element.target.value = this.formattedAmount;
  }
}
