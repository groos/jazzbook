module.exports = {
    songs: {
        'takeTheATrain' : {
            songTitle: 'Take the A Train',
            measures: [
                { chords: [{ note: 'C3', chordType: 'M7', beats: 4 }]},
                { chords: [{ note: 'C3', chordType: 'M7', beats: 4 }]},
                { chords: [{ note: 'D3', chordType: '7b5', beats: 4 }]},
                { chords: [{ note: 'D3', chordType: '7b5', beats: 4 }]},
                { chords: [{ note: 'D3', chordType: 'm7', beats: 4 }]},
                { chords: [{ note: 'G2', chordType: '7', beats: 4 }]},
                { chords: [{ note: 'C3', chordType: 'M7', beats: 4 }]},
                { chords: [{ note: 'C3', chordType: 'M7', beats: 4 }]},
            ]
        }
    },
    testMeasures: [
        // simple test for 2 chords per measure
        // { chords: [{ note: 'C3', chordType: 'M7', beats: 4 }] },
        // {
        //     chords: [
        //         { note: 'D3', chordType: 'm7', beats: 2 },
        //         { note: 'G3', chordType: '7', beats: 2 }
        //     ]
        // }

        // simple test for 4 chords per measure
        { chords: [{ note: 'C3', chordType: 'M7', beats: 4 }] },
        {
            chords: [
                { note: 'D3', chordType: 'm7', beats: 2 },
                { note: 'G3', chordType: '7', beats: 2 }
            ]
        },
        {
            chords: [
                { note: 'D3', chordType: 'm7', beats: 1 },
                { note: 'D3', chordType: 'm7', beats: 1 },
                { note: 'G3', chordType: '7', beats: 1 },
                { note: 'G3', chordType: '7', beats: 1 }
            ]
        }

        // simple 12 bar blues
        // { chords: [{ note: 'C3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'C3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'C3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'C3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'F3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'F3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'C3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'C3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'G3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'F3', chordType: '7', beats: 4 }] },
        // { chords: [{ note: 'C3', chordType: '7', beats: 4 }] },
        // {
        //     chords: [
        //         { note: 'C3', chordType: '7', beats: 4 },
        //         { note: 'G3', chordType: '7', beats: 4 }
        //     ]
        // },
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