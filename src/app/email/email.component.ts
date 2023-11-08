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
import { Router } from '@angular/router';
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
    private emailService: EmailService,
    private clearformService: ClearFormService,
    private router: Router
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
    this.emailService.PostMessage(this.FormData.value).subscribe(
      (response: FormspreeResponse) => {
        if (response.ok) {
          this.router.navigate(['/success']);
        } else if (response.error) {
          // Handle the error case
        }
      },
      (error) => {
        console.log({ error });
      }
    );
  }

  onCancel() {
    this.clearEmailForm();  
    this.router.navigate(['/main']); 
  }
  clearEmailForm() {
    this.FormData.reset();
    this.isSubmitted = false;
  }
}
