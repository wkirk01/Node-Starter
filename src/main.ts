import os from 'os'

const systemInfo = {
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
}

console.log(systemInfo);