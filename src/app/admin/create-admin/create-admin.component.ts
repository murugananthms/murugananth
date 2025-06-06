import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  // styleUrls: ['./create-admin.component.css'] 
})
export class CreateAdminComponent {
  adminForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.adminForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['admin', Validators.required]
    });
  }

  onSubmit() {
    if (this.adminForm.valid) {
      const formData = this.adminForm.value;

      // Replace with your actual backend URL
      this.http.post('https://example.com/api/users', formData).subscribe({
        next: (res) => {
          alert('Admin created successfully!');
          this.adminForm.reset();
        },
        error: (err) => {
          console.error('Error creating admin:', err);
          alert('Failed to create admin.');
        }
      });
    }
  }
}

