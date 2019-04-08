/*
 *
 * Brain Wave Average
 *
 */

class BWA {
    constructor(props) {
        this.stream = props.stream
    }

    record() {
        this.stream.observable.subscribe((data) => {
            console.log(data)
            // add all data to array
        })
    }

    
    stop() {
        // unsubscribe
    }
}

export { BWA }