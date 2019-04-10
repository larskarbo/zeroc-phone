

import { Observable, of, pipe } from 'rxjs';
import { EEGSource } from "./EEGSource.js"
import { MuseClient } from 'muse-js';

class Muse extends EEGSource {

    constructor(props) {
        super(props);
        this.useAjaxBridge = props.useAjaxBridge
    }

    connect(callback) {
        navigator.bluetooth.requestDevice({
            filters: [
                { namePrefix: 'MUSE' },
                { namePrefix: 'Muse' },
                { namePrefix: 'OpenBCI' }
            ]
        })
            .then(device => {
                console.log('yeah 🤩', device)
                console.log('device: ', device);
                callback()
            })
            .catch(error => { console.log(error); });
    }

    async initialize() {
        this.stream = this.createStream();

        if (this.useAjaxBridge) {
            this.connect(this.handleStrem)
        } else {
            this.connectBridge(this.handleStrem)
        }
    }

    handleStream() {
        console.log(this.stream)
        console.log('NICE STREAM')
    }
}

export { Muse }