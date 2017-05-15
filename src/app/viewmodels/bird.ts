import { WalkInterface } from '../interfaces/walk';
import { EatInterface } from '../interfaces/eat';
import { FlyInterface } from '../interfaces/fly';

export class Bird implements WalkInterface, EatInterface, FlyInterface {

    public eat(food: string) {
      return 'the bird eats the ' + food;
    }

    public walk(distance: number) {
      return 'the bird walk ' + distance;
    }

    public fly(speed: number) {
      return 'the bird fly : ' + speed + ' m/s';
    }
}
