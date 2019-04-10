

import { Observable, of, pipe } from 'rxjs';
import { EEGSource } from "./EEGSource.js"
import { MuseClient } from 'muse-js';

class Muse extends EEGSource {

    constructor() {
        super();
        console.log('const')
        // this.observable = Observable.create(function (observer) {
        //     setInterval(() => {
        //         observer.next({
        //             alfa: 1,
        //             beta: 1,
        //             smr: 2
        //         });
        //     }, 100);
        // });
    }

    async initialize() {
        console.log('initing')


        const ws = new WebSocket('ws://localhost:8080');

        ws.addEventListener('open', function (event) {
            ws.send('Hello Server!');
        });

        ws.addEventListener("message", function (event) {
            var data = event.data;
            console.log('data: ', JSON.parse(data));
            // handle data
        });

        // navigator.bluetooth.requestDevice({
        //     filters: [
        //         { namePrefix: 'MUSE' },
        //         { namePrefix: 'Muse' },
        //         { namePrefix: 'OpenBCI' }
        //     ]
        // })
        //     .then(device => {
        //         console.log('yeah 🤩', device)
        //         console.log('device: ', device);
        //     })
        //     .catch(error => { console.log(error); });

        // let client = new MuseClient();
        // await client.connect();
        // await client.start();
        // client.eegReadings.subscribe(reading => {
        //     // console.log('reading: ', reading);
        // });
        // client.telemetryData.subscribe(telemetry => {
        //     console.log('telemetry: ', telemetry);
        // });
        // client.accelerometerData.subscribe(acceleration => {
        //     // console.log('acceleration: ', acceleration);
        // });
    }
}

export { Muse }