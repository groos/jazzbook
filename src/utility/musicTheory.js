var tonal = require('tonal');

module.exports = {
    getArpeggioNotes: (root, chordType) => {
        return tonal.chord(chordType).map((interval) => {
            return tonal.transpose(root, interval);
        })
    }
}