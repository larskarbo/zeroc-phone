

import { Observable, of, pipe } from 'rxjs';
import { EEGSource } from "./EEGSource.js"
import { MuseClient } from 'muse-js';

class Muse extends EEGSource {

    // constructor() {
    //     super();
    //     // this.observable = Observable.create(function (observer) {
    //     //     setInterval(() => {
    //     //         observer.next({
    //     //             alfa: 1,
    //     //             beta: 1,
    //     //             smr: 2
    //     //         });
    //     //     }, 100);
    //     // });
    // }

    async connect (cb){
        let client = new MuseClient();
        await client.connect();
        await client.start();
        client.eegReadings.subscribe(reading => {
            this.stream.next(reading);
        });
        client.telemetryData.subscribe(telemetry => {
            console.log('telemetry: ', telemetry);
        });
        client.accelerometerData.subscribe(acceleration => {
            // console.log('acceleration: ', acceleration);
        });
    }

    async initialize() {
        console.log('initing🤩')
        this.stream = this.createStream();

        if (this.useAjaxBridge) {
            this.connect()
        } else {
            this.connectBridge()
        }
        
        this.handleStream()
    }


    handleStream() {
        console.log(this.stream)
        this.stream.subscribe(asdf => {
            console.log('asdf: ', asdf);

        })
        console.log('NICE STREAM')
    }
}

export { Muse }