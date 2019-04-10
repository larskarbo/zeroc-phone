/*
 *
 * Base Device class som alle andre arva fra
 *
 */

import { Observable, of, pipe, Subject } from 'rxjs';



class EEGSource {

    constructor() {
        
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