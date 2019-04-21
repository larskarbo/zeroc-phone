

import { Muse } from "./Muse"
import { MuseBridge } from "./MuseBridge"
import { OpenBCI } from "./OpenBCI"
// import { OpenBCIBridge } from "./OpenBCIBridge"
import { Random } from "./Random"

const devices = {
    Muse,
    MuseBridge,
    OpenBCI,
    Random
}
console.log('devices: ', devices);

export { devices }