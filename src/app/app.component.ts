import { Component } from '@angular/core';
import { AppService } from './services/app.service'

import { UserPrivateViewmodel } from './viewmodels/userPrivate';
import { UserPublicViewmodel } from './viewmodels/userPublic';
import { Dog } from './viewmodels/dog';
import { Bird } from './viewmodels/bird';
import { EatInterface } from './interfaces/eat';


@Component({
  selector: 'app-root',
  template: `
            <div>
              <h1>{{title}}</h1>
            </div>
            <div>
            Correct
            ---------------------------------------------------
              <div>{{CorrectSingleResponsability}}</div>
            ---------------------------------------------------
            Incorrect
            ---------------------------------------------------
              <div>{{IncorrectSingleResponsability}}</div>
              <div>Result Operation =  {{operation}}</div>
            ---------------------------------------------------
            </div>
            <div>
              <div> Open-closed principle: it should be possible to extend the behavoir of a class without  modifying it </div>
              <div> UserName Private = {{userPrivateName}}
              <div> UserName Public  = {{userPublicName}}
            </div>

            <div>
              <div> Liskov Substitution principle: subclasses should be substitutable for their superclasses</div>
              <div> Get the name of the private with Liskov = {{liskovName}}</div>
              <div>
            </div>

            <div>
              <div>Interface segregation principle: many small, client-specific interfaces are better than one general purpose interface</div>
              <div> It says what dog is eating = {{dogFood}}</div>
              <div>
            </div>

            <div>
              <div>Dependency inversion principle: depends on abstractions not concretions</div>
              <div> Give Food to any animal that can eat = {{animalGotFood}}</div>
              <div>
            </div>

            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operation: number;
  title: string = 'The five SOLID principles are:';
  CorrectSingleResponsability: string = '';
  IncorrectSingleResponsability: string = '';

  liskovName: string;


  userPrivate: UserPrivateViewmodel = new UserPrivateViewmodel('Nombre');
  userPublic: UserPublicViewmodel = new UserPublicViewmodel('Nombre');
  userPrivateName: string;
  userPublicName: string;
  dog: Dog = new Dog();
  bird: Bird = new Bird();
  dogFood: string;
  food: string = 'bread';
  animalGotFood: string;

  constructor(private appService: AppService){}

// THe first Solid Principle is that a method should have one, and only one, reason to change,
// for example: we can see how getTheRightTitle, just has the method to set the title.
// if we have 2 entities that set titles we just have to change it on the services and the both entities
// will change it. Instead if we set the variable on both entities we will have to set it twice.

//'GETTHERIGHTTITLE ---> Correct'
  ngOnInit(){
    this.getTheRightTitle();
    this.getTheIncorrectTitle();
    this.getName();
    this.getNameLiskov();
    this.giveFoodToTheDog(this.food);
    this.giveFoodToAnimal(this.bird, this.food)
  }

  getTheRightTitle() {
    this.CorrectSingleResponsability = this.appService.getTitle();
  }

//'GETTHERIGHTTITLE ---> InCorrect'
// This method has more than one responsability
  getTheIncorrectTitle(){
    this.IncorrectSingleResponsability = 'Single responsibility principle: a class should have one, and only one, reason to change';
    this.operation = 4 + 4;
  }

//Open-closed principle: it should be possible to extend the behavoir of a class without  modifying it;
// CORRECT --> UserViewmodel describe a method to get the name. but getName depends of the type of the user.
// Depends of the user , will get differents name;
//UserViewmodel describe un metodo para calcular el nombre.
//El getName depende del tipo de usuario.
//Depende del usuario obtendra un nombre o otro.


// WRONG ---->the wrong way to do that is that both Models had the same attributes with constructor and same methods.
// and dont extend from a main viewmodel

  getName() {
    this.userPrivateName = this.userPrivate.getName();
    this.userPublicName = this.userPublic.getName();
  }

// La idea del liskov esque no pierdas la funcionalidad del padre, sino que la extiendas como mucho.
// liskov trata de no romper la funcionalidad del padre para que en el caso de que desaparezca la funcionalidad del hijo, siga pudiendo coger los datos del
//methodo del padre.
// Conseguir no modificar el padre por muchos hijos que tenga.

  getNameLiskov() {
    console.log('this.userPrivate', this.userPrivate)
    this.liskovName = this.appService.getUserName(this.userPrivate)
  }

// Interface segregation principle: many small, client-specific interfaces are better than one general purpose interface;
// El principio de la interfaz de segregación lo que hace es dividir las clases que son muy grandes en mas pequeñas y mas especificas,
//así es mas facil encontrar los metodos que nos interesan
// Tenemos las interfaces eat/fly/walk --> y una clase que se llama dog, esta clase implementa eat y walk que es lo que puede hacer.
//del qual contiene dos methodos de las interfaces.
  giveFoodToTheDog(food: string){
    this.dogFood =this.dog.eat(food);
  }

//Dependency inversion principle: depends on abstractions not concretions
//Depende de la interfaz no de la implementación.
  giveFoodToAnimal(animal: EatInterface, food: string) {
    this.animalGotFood = this.appService.giveFood(animal, food);
  }
}
