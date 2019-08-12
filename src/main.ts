// import _ from "lodash"
// import axios from "axios"

// _.times(2, () => {
//     console.log("hello world")
// })

import os from 'os'

const systemInfo = {
    architecture: os.arch(),
    platform: os.platform(),
}

console.log(systemInfo);