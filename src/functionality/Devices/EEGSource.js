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

    
    // constructor() {
    // }
    
    createStream() {
        return new Subject();
    }


    async initialize() {
        this.stream = this.createStream();

        if (!this.useAjaxBridge) {
            const device = await this.connect(this.handleStrem)
            console.log('device: ', device);
        } else {
            await this.connectBridge(this.handleStrem)
        }
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