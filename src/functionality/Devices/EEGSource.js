/*
 *
 * Base Device class som alle andre arva fra
 *
 */

import { Observable, of, pipe } from 'rxjs';
import { randomBytes } from 'crypto';

function randomNum(min,max){
    return Math.random()*(max-min+1)+min;
}

class EEGSource {

    
    constructor() {
        this.observable = Observable.create(function (observer) {
            setInterval(() => {
                observer.next({
                    alfa: randomNum(0.5,2),
                    beta: randomNum(0.5,2),
                    smr: randomNum(0.5,2)
                });
            }, 1000/60);
        });
    }
}

export { EEGSource }