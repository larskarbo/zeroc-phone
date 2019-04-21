/*
 *
 * Brain Wave Average
 *
 */

import { Howl, Howler } from 'howler';
class HighSMR {
    constructor(props) {
        this.stream = props.stream
        this.rainSound = new Howl({ src: ['music/rain.mp3'] })
    }

    soundLoad(sound, callback) {
        console.log('loader')
        sound.on('load', function () {
            console.log('loading complete')
            callback();
            return (true)
        })
    }

    changeVolume(sound, vol) {
        sound.volume(vol)
    }

    playRain() {
        console.log('playRain funker')

        this.rainSound.volume();
        this.rainSound.play();
    }

    playGong() {
        var gongSound = new Howl({ src: ['music/gong.mp3'] })
        gongSound.play();
        console.log('playGong funker')
    }

    record() {
        this.stream.observable.subscribe((data) => {
            console.log(data)

            // add all data to array
        })
    }

    supremeSMR(alfa, theta, SMR) {
        return ((SMR > alfa && SMR > theta))
    }

    begin() {
        this.playRain()
        var referanse = this
        this.soundLoad(this.rainSound, () => {
            setTimeout(function () {
                referanse.changeVolume(referanse.rainSound, 0.1)
            }, 10000)

            this.stream.subscribe((data) => {
                //console.log(data)

                if (this.supremeSMR(data.alfa, data.beta, data.smr)) {
                    this.changeVolume(this.rainSound, 1)
                    console.log("over");
                }

                else {
                    this.changeVolume(this.rainSound, 0)
                    console.log("under");
                }

            })
        })

    }
}
export { HighSMR }