import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required]
    });

  }

  showValidationMessage(): boolean {
    return this.form.controls['firstname'].dirty && this.form.controls['firstname'].invalid;
  }


  submit() {
    console.log('### submit form');
  }
}
