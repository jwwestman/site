import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  NgForm,
} from '@angular/forms';
import { EmailService } from '../service/email.service';
import { FormspreeResponse } from '../models/formspree';
import { ClearFormService } from '../service/clear-form.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  FormData!: FormGroup;
  email: string = '';
  message: string = '';
  responseMessage: string = '';
  isSubmitted = false;

  constructor(
    private builder: FormBuilder,
    private contact: EmailService,
    private clearformService: ClearFormService
  ) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', Validators.required),
      Email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      Comment: new FormControl('', Validators.required),
    });
    this.clearformService.clearFormObservable.subscribe(() => {
      this.clearEmailForm();
    });
  }

  onSubmit() {
    this.contact.PostMessage(this.FormData.value).subscribe(
      (response: FormspreeResponse) => {
        this.isSubmitted = true;
        if (response.ok) {
          this.responseMessage = 'Email sent successfully!';
        } else if (response.error) {
          this.responseMessage = response.error;
        }
      },
      (error) => {
        console.log({ error });
      }
    );
  }
  clearEmailForm() {
    this.FormData.reset();
    this.isSubmitted = false;
  }
}
