import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../shared/button/services/task.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskForm } from '../form/form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy {

  public sub: Subscription;
  public id: number;
  public task: Array<TaskForm>;
  public formGroup: FormGroup;
  public visible = false;
  public valuesArras: Array<TaskForm>;
  public showEditForm = true;

  constructor(private formBuilder: FormBuilder,
    public TaskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.task = this.TaskService.getTask(this.id);
    this.formGroup.patchValue({
      title: this.task[0].title,
      description: this.task[0].description,
      deadline: this.task[0].deadline,
      hours: this.task[0].hours,
      minutes: this.task[0].minutes,
      value: this.task[0].value,
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onSubmit(form: FormGroup) {
    if(confirm("are you sure to save changes?"))
    {
      if (this.formGroup.valid) {
        form.value.id = this.task[0].id;
        this.TaskService.updateTask(form.value);
        this.visible = true;
        this.router.navigateByUrl('/');
      }
      else {
          this.TaskService.validateAllFormFields(this.formGroup);
      }
    }
  }


  public isFieldValid(field: string) {
    return !this.formGroup.get(field).valid && this.formGroup.get(field).touched;
  }

  public checkerCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  public discardChanges (event) { 
    event.preventDefault();
    if(confirm("Are you sure to discard changes"))
    { 
      this.router.navigateByUrl('task-item');
    }
  }
}
