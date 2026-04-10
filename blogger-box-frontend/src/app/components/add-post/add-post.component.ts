import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/Category.service';
import { Category } from '../../data/category';
import { PostCreateInput } from '../../data/post';
import Swal from 'sweetalert2';

export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  };
}

@Component({
  selector: 'app-add-post',
  standalone: false,
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  categories: Category[] = [];
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      name: ['', [Validators.required, noWhitespaceValidator(), Validators.minLength(5), Validators.maxLength(150)]],
      categoryId: ['', [Validators.required]],
      description: ['', [Validators.required, noWhitespaceValidator(), Validators.maxLength(2500)]]
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(cats => {
      this.categories = cats;
    });
  }

  get f() { return this.postForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.postForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please review your post',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      return;
    }

    const formVal = this.postForm.value;
    const selectedCategory = this.categories.find(c => c.id === formVal.categoryId);
    
    // We send category as object based on existing Post interface, or adjust if needed.
    // In Angular HTTP, sending an object containing category object is typical when matching the view model
    const newPost: any = {
      name: formVal.name,
      description: formVal.description,
      category: selectedCategory
    };

    this.postService.createPost(newPost).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Post Submitted Successfully',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        this.router.navigate(['/']);
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to submit post',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }
    });
  }
}
