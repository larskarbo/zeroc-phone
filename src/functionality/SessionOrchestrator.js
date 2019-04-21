
import { devices } from "./devices"
import { BWA } from "./BWA"
import { HighSMR } from "./Feedback/HighSMR"

class SessionOrchestrator {
    constructor(props) {
        console.log('props: ', props);
        console.log('constructing')

        this.deviceType = props.device
        this.average = null;
    }

    async begin() {
        console.log('Starting!')
        
        // first create stream
        const Device = devices[this.deviceType]
        const source = new Device({
            useAjaxBridge: false
        })

        await source.initialize();

        // second calc bwa
        const bwa = new BWA({
            stream: source.stream
        })
        // not implemented
        //bwa.record()

        const fm = new HighSMR({
            stream: source.stream
        })

        fm.begin();
    }
}

export { SessionOrchestrator }