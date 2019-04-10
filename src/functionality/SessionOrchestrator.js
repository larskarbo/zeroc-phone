import { Random } from "./Devices/Random.js"
import { Muse } from "./Devices/Muse.js"
import { BWA } from "./BWA"
import { HighSMR } from "./Feedback/HighSMR"

class SessionOrchestrator {
    constructor() {
        console.log('constructing')

        this.average = null;
    }

    async begin() {
        console.log('Starting!')

        // first create stream
        const source = new Muse({
            
            useAjaxBridge: true
        })
        // const source = new Random()

        await source.initialize();


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

                fm.begin()

                // timeout 5 sek
                setTimeout(() => {
                    fm.stop()
                }, 5000)

            })
        }, 2000)
    }
}

export { SessionOrchestrator }