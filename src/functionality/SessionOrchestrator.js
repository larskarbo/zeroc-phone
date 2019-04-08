import { Random } from "./Devices/Random.js"
import { BWA } from "./BWA"
import { HighSMR } from "./Feedback/HighSMR"
import {Howl, Howler} from 'howler';

class SessionOrchestrator {
    constructor() {
        console.log('constructing')

        this.average = null;
    }

    begin() {
        console.log('Starting!')

        var testSound = new Howl({src:['puppy-barking.mp3']});
        testSound.play();

        // first create stream
        const stream = new Random()

        // second calc bwa
        const bwa = new BWA({
            stream: stream
        })

        bwa.record()
        // set en timeout 2 sek (skal gjer det her på finare måte men funka for no)
        setTimeout(() => {
            bwa.stop((results) => {
                this.average = results

                // third start FM

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