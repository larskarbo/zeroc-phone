/*
 *
 * Base Device class som alle andre arva fra
 *
 */

import { Observable, of, pipe, Subject } from 'rxjs';
import { randomBytes } from 'crypto';

function randomNum(min,max){
    return Math.random()*(max-min+1)+min;
}

class EEGSource {

    
    constructor() {
        // setInterval(() => {
        //     observer.next({
        //         alfa: randomNum(0.5, 2),
        //         beta: randomNum(0.5, 2),
        //         smr: randomNum(0.5, 2)
        //     });
        // }, 1000 / 60);
    }
    
    createStream() {
        return new Subject();
    }

    connectBridge() {
        const ws = new WebSocket('ws://localhost:8080');

        ws.addEventListener('open', function (event) {
            ws.send('Hello Server!');
        });

        ws.addEventListener("message", (event) => {
            var data = event.data;
            // console.log('data: ', );
            this.stream.next(JSON.parse(data))
            // handle data
        });
    }

}

export { EEGSource }