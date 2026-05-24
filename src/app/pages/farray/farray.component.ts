  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

  @Component({
    selector: 'app-farray',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './farray.component.html',
    styleUrl: './farray.component.css'
  })
  export class FarrayComponent {
    uform !: FormGroup;
    submittedUsers: any[] = [];
    constructor(private fb:FormBuilder){
      this.uform = this.fb.group({
        name: [''],
        skills: this.fb.array([])
      });
      this.adduser();
    }
    adduser(){
      // this.skills.push(this.createuser());
      this.addSkill()
    }
    createuser(){
      return this.fb.group({
        Technology:[''],
        Experience:['']
      })
      // this.skills.push(skill);
    }
    get skills() : FormArray{
      return this.uform.get("skills") as FormArray
    }
    onSubmit(){
      if(this.uform.valid){
        console.log(this.uform.value);
        this.submittedUsers.push(this.uform.value);
        this.uform.reset();
      }
    }
    addSkill(){
      this.skills.push(this.createuser());

    }
    removeSkill(index:number){
      this.skills.removeAt(index);
    }

  }
