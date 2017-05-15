//UserViewmodel describe un metodo para calcular el nombre.
//El getName depende del tipo de usuario.
//Depende del usuario obtendra un nombre o otro.

export class UserViewmodel {

  protected name: string;
  private surname: string;
  private email: string;
  private phone: string;

  constructor(name: string){
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getSurname(): string {
    return this.surname;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }
}
