module.exports = {
    testMeasures: [
        { note: 'C', chordType: '7', beats: 4 },
        { note: 'C', chordType: '7', beats: 4 },
        { note: 'C', chordType: '7', beats: 4 },
        { note: 'C', chordType: '7', beats: 4 },
        { note: 'F', chordType: '7', beats: 4 },
        { note: 'F', chordType: '7', beats: 4 },
        { note: 'C', chordType: '7', beats: 4 },
        { note: 'C', chordType: '7', beats: 4 },
        { note: 'G', chordType: '7', beats: 4 },
        { note: 'F', chordType: '7', beats: 4 },
        { note: 'C', chordType: '7', beats: 4 },
        { note: 'G', chordType: '7', beats: 4 },
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