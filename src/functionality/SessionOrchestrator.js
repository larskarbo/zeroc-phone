import { Random } from "./Devices/Random.js"
import { Muse } from "./Devices/Muse.js"
import { BWA } from "./BWA"
import { HighSMR } from "./Feedback/HighSMR"
import {Howl, Howler} from 'howler';

class SessionOrchestrator {
    constructor() {
        console.log('constructing')

        this.average = null;
    }

    playRain() {
        var rainSound = new Howl({src:['rain.mp3']});
        rainSound.play();
    }

    async begin() {
        console.log('Starting!')

        //var testSound = new Howl({src:['puppy-barking.mp3']});
        //testSound.play();
        this.playRain();
        
        
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
        //hekter på console.log(masse data)
        //bwa.record()

        const fm = new HighSMR({
            stream: stream
        })

        fm.begin();

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
                    //fm.stop()
                }, 5000)

            })
        }, 2000)
    }
}

export { SessionOrchestrator }