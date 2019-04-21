

import { Observable, of, pipe } from 'rxjs';
import { EEGSource } from "./EEGSource.js"
// import { MuseClient } from './node_modules/muse-js';

class OpenBCI extends EEGSource {

    constructor(props) {
        super(props);
        this.useAjaxBridge = props.useAjaxBridge
    }

    async connect() {
        console.log('📚 connecting')
        const device = await navigator.bluetooth.requestDevice({
            filters: [
                { namePrefix: 'OpenBCI' },
                { namePrefix: 'Ganglion' },
            ]
        })
        .then(device => {
            console.log('device: ', device);
            return device
        })
        .catch(error => { console.log(error); });

        // this.stream.next(JSON.parse(data))
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

    handleStream() {
        console.log(this.stream)
        console.log('NICE STREAM')
    }
}

export { OpenBCI }