import { Injectable } from '@angular/core';
import { UserPrivateViewmodel } from '../viewmodels/userPrivate';
import { UserPublicViewmodel } from '../viewmodels/userPublic';
import { UserViewmodel } from '../viewmodels/user';

import { EatInterface } from '../interfaces/eat';


@Injectable()
export class AppService {
title: string = 'Single responsibility principle: a class should have one, and only one, reason to change';

  getTitle(): string {
    return this.title;
  }

  getUserName(user: UserViewmodel): string{
    return user.getName();
  }

  giveFood(animal: EatInterface, food: string): string{
    return animal.eat(food);
  }
}
