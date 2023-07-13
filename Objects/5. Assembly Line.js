function createAssemblyLine() {
    return {
        hasClima(obj) {
            let temp = 19;
            let tempSettings = 21;
            function adjustTemp() {
                temp < tempSettings ? temp += 1 : temp -= 1;
                console.log(temp);
            }

            // return { ...obj,temp,tempSettings,adjustTemp}
            return Object.assign(obj, { temp, tempSettings, adjustTemp })
        },
        hasAudio: obj =>
            Object.assign(obj, {
                currentTrack: {
                    name: null,
                    artist: null,
                },
                nowPlaying: function () {
                    if (this.currentTrack.artist || this.currentTrack.name !== null) {
                        console.log(
                            `Now playing '${this.currentTrack.name} by ${this.currentTrack.artist} `
                        )
                    }
                }
            }),
        hasParktronic: obj => Object.assign(obj, {
            checkDistance: function (distance) {
                const distances = {
                    [distance < 0.1]: "Beep! Beep! Beep!",
                    [0.1 <= distance && distance < 0.25]: "Beep! Beep!",
                    [0.25 <= distance && distance < 0.5]: "Beep!",
                }
                console.log(
                    (Object.entries(distances).find(x => x[0] === 'true') || ['true', ""])[1]
                )
            }
        })
    }
}
const assemblyLine = createAssemblyLine();
const myCar = {
 make: 'Toyota',
 model: 'Avensis'
};

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
 name: 'Never Gonna Give You Up',
 artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar); 