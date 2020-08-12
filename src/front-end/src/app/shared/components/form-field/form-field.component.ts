import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  hint: string;

  constructor() {}

  ngOnInit(): void {}
}
