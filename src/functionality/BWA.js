/*
 *
 * Brain Wave Average
 *
 */

class BWA {
    constructor(props) {
        this.stream = props.stream
    }

    record = () => {
        console.log('this.stream: ', this.stream);
        this.stream.subscribe((data) => {
            // console.log(data)
            // add all data to array
        })
    }
    stop() {
        // unsubscribe
    }
}

export { BWA }