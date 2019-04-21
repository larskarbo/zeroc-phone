
import {devices} from "./devices"
import { BWA } from "./BWA"
import { HighSMR } from "./Feedback/HighSMR"
import {Howl, Howler} from 'howler';

class SessionOrchestrator {
    constructor(props) {
        console.log('props: ', props);
        console.log('constructing')

        this.deviceType = props.device
        this.average = null;
    }

    async begin() {
        console.log('Starting!')


        var testSound = new Howl({src:['puppy-barking.mp3']});
        // testSound.play();

        // first create stream
        const Device = devices[this.deviceType]
        const source = new Device({
            useAjaxBridge: false
        })

        await source.initialize();
        console.log('finished initializing!')

        // second calc bwa
        const bwa = new BWA({
            stream: source.stream
        })

        bwa.record()
        // set en timeout 2 sek (skal gjer det her på finare måte men funka for no)
        setTimeout(() => {
            bwa.stop((results) => {
                this.average = results

                // third start FM
                const fm = new HighSMR({
                    stream: source.stream
                })

                //fm.begin()

                // timeout 5 sek
                setTimeout(() => {
                    //fm.stop()
                }, 5000)

            })
        }, 2000)
    }
}

export { SessionOrchestrator }