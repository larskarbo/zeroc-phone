import { EEGSource } from "./EEGSource";

function randomNum(min, max) {
    return Math.random() * (max - min + 1) + min;
}

class Random extends EEGSource {


    async connect() {
        setInterval(() => {
            this.stream.next({
                alfa: randomNum(0.5, 2),
                beta: randomNum(0.5, 2),
                smr: randomNum(0.5, 2)
            });
        }, 1000 / 60);

    }


}

export { Random }