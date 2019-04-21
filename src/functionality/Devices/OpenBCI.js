

import { Observable, of, pipe } from 'rxjs';
import { EEGSource } from "./EEGSource.js"
import Ganglion from 'ganglion-ble';
import { epoch, fft, alphaPower } from "@neurosity/pipes";
// import { MuseClient } from './node_modules/muse-js';

class OpenBCI extends EEGSource {

    constructor(props) {
        super(props);
        this.useAjaxBridge = props.useAjaxBridge
    }

    async connect() {
        console.log('📚 connecting')
        const ganglion = new Ganglion();
        await ganglion.connect();
        await ganglion.start();

        // this.stream.map(this.handleStream)

        ganglion.stream.subscribe(sample => {
            console.log('sample', sample);
            this.stream.next(sample)

            this.stream.pipe(
                epoch({ duration: 256, interval: 100 }),
                fft({ bins: 256 }),
                alphaPower()
            )
                .subscribe(alpha => {
                    // console.log('alpha: ', alpha);
                })
        });

        // const device = await navigator.bluetooth.requestDevice({
        //     filters: [
        //         { namePrefix: 'OpenBCI' },
        //         { namePrefix: 'Ganglion' },
        //     ]
        // })
        // .then(device => {
        //     console.log('device: ', device);
        //     // this.stream.next
        //     return device
        // })
        // .catch(error => { console.log(error); });

        // this.stream.next(JSON.parse(data))
    }


    handleStream(asdf) {
        console.log('asdf: ', asdf);
        console.log(this.stream)
        console.log('NICE STREAM')
    }
}

export { OpenBCI }