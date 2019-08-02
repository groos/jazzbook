var tonal = require('tonal');

module.exports = {
    getArpeggioNotes: (root, chordType) => {
        return tonal.chord(chordType).map((interval) => {
            return tonal.transpose(root, interval);
        })
    },
    getSimpleNoteName: (note) => {
        return note.substring(0, note.length - 1);
    }
}