import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidator {

  static validemail(control: AbstractControl): { [prop: string]: boolean } | null {

    const email = control.value;

    if (email) {
      if (!email.endsWith('@gmail.com')) {
        return ({
          notvalidgmail: true
        });
      }
    }
    return null;

  }

  static validpassword(param1: any, error: ValidationErrors): (control: AbstractControl) => { [prop: string]: boolean } | null {

    return (control: AbstractControl): { [prop: string]: boolean } | null => {

      const password = control.value;
      if (!password.match(param1)) {
        return error;
      }

      return null;

    };

  }

  static notsamepassword(control: AbstractControl): void {

    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');

    if (confirmpassword.value) {

      if (confirmpassword.value !== password.value) {
        confirmpassword.setErrors({notsame: true});
      }

    }

  }

}
