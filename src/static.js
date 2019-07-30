module.exports = {
    songs: [
        [
            { note: 'C3', chordType: 'M7', beats: 4 },
            { note: 'D3', chordType: 'm7', beats: 2 },
            { note: 'G3', chordType: '7', beats: 2 },
        ]
    ],
    testMeasures: [
        { chords: [{ note: 'C3', chordType: 'M7', beats: 4 }] },
        { chords: [{ note: 'D3', chordType: 'm7', beats: 2 }, { note: 'G3', chordType: '7', beats: 2 }] }

        // { note: 'C3', chordType: '7', beats: 4 },
        // { note: 'C3', chordType: '7', beats: 4 },
        // { note: 'C3', chordType: '7', beats: 4 },
        // { note: 'C3', chordType: '7', beats: 4 },
        // { note: 'F3', chordType: '7', beats: 4 },
        // { note: 'F3', chordType: '7', beats: 4 },
        // { note: 'C3', chordType: '7', beats: 4 },
        // { note: 'C3', chordType: '7', beats: 4 },
        // { note: 'G3', chordType: '7', beats: 4 },
        // { note: 'F3', chordType: '7', beats: 4 },
        // { note: 'C3', chordType: '7', beats: 4 },
        // { note: 'G3', chordType: '7', beats: 4 },
    ],
    defaultValues: {
        beatsPerMeasure: 4,
        beatsPerMinute: 150,
        chordType: 'M7'
    },
    chordTypes: [
        {
            fullName: 'Major 7th',
            shortName: 'M7'
        },
        {
            fullName: 'Minor 7th',
            shortName: 'm7'
        },
        {
            fullName: 'Dominant 7th',
            shortName: '7'
        },
        {
            fullName: 'Minor 7 Flat 5',
            shortName: 'm7b5'
        }
    ]
};