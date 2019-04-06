/*
 *
 * Base Device class som alle andre arva fra
 *
 */

import { Observable, of, pipe } from 'rxjs';



class EEGSource {

    constructor() {
        this.observable = Observable.create(function (observer) {
            setInterval(() => {
                observer.next({
                    alfa: 1,
                    beta: 1,
                    smr: 2
                });
            }, 100);
        });
    }


}

export { EEGSource }