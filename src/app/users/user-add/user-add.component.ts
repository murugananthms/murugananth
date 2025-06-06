import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['user', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;

      // Replace with your real API endpoint
      this.http.post('https://example.com/api/users', newUser).subscribe({
        next: (response) => {
          alert('User added successfully!');
          this.userForm.reset();
        },
        error: (error) => {
          console.error('User creation failed:', error);
          alert('Something went wrong while adding the user.');
        }
      });
    }
  }
}
