import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SerieClass } from 'src/app/classes/serie';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent extends SerieClass implements OnInit {
  constructor(private _formBuilder: FormBuilder) {
    super();
  }
  public numberForm: FormGroup = new FormGroup({});
  public resultSerie: any = 0;
  public error: string = '';

  private _createForm() {
    this.numberForm = this._formBuilder.group({
      number: ['', [Validators.required]],
    });
  }

  public clickButton() {
    this.resultSerie = this.calculateSerie(this.numberForm.value.number);
    this.error = '';
    if (isNaN(this.resultSerie)) {
      this.error = this.resultSerie;
      this.resultSerie = 0;
    }
  }

  ngOnInit(): void {
    this._createForm();
  }
}
