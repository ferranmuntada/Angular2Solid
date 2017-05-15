import { WalkInterface } from '../interfaces/walk';
import { EatInterface } from '../interfaces/eat';

export class Dog implements WalkInterface, EatInterface {

    public eat(food: string) {
      return 'the dog eats the ' + food;
    }

    public walk(distance: number) {
      return 'the dog walk ' + distance;
    }
}
