import _ from 'lodash';

import {environment} from './_environment.js';
import {revision} from './_revision.js';

class Greeter {
  constructor(greeting) {
    this.greeting = greeting;
  }

  sayHello() {
    console.log(this.greeting);
    console.log(environment);
    console.log(revision);
  }
}

(new Greeter('Ahoy!')).sayHello();
