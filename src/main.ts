import os from 'os'

const systemInfo = {
    architecture: os.arch(),
    platform: os.platform(),
}

console.log(systemInfo);