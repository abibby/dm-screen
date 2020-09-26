export type TaskDC = [string | undefined, string | number, string]
export type Task = [string, TaskDC[]]
export type Checks = [string, Task[]][]

export const checks: Checks = [
    [
        'Strength',
        [
            [
                'Athlethics • Climb',
                [
                    [
                        'Climb',
                        'DC 0-5',
                        'With sufficient handholds ½ your movement speed',
                    ],
                    ['Easy', 'DC 10', 'Scale a cliff with plenty of handholds'],
                    ['Moderate', 'DC 15', 'Climb a rough stone wall'],
                    [
                        'Hard',
                        'DC 20',
                        'Climb a sheer surface with scant handholds',
                    ],
                    ['Formidable', 'DC 30', 'Climb an oiled rope'],
                ],
            ],

            [
                'Athlethics • Jump',
                [
                    [
                        'Long Jump',
                        'DC 0-5',
                        '1 foot per STR with 10ft run-up, ½ from standing',
                    ],
                    [
                        'High Jump',
                        'DC 0-5',
                        '3+STR Mod. In feet with 10ft run-up, ½ from standing',
                    ],
                    [
                        'Easy',
                        'DC 10',
                        'Jump a few feet farther than you normally could',
                    ],
                    [
                        'Hard',
                        'DC 20',
                        'Throw a grappling hook in the middle of a long jump',
                    ],
                ],
            ],

            [
                'Athlethics • Swim',
                [
                    [
                        'Swim',
                        'DC 0-5',
                        '½ your movement speed, each hour you must succeed on DC 10 Constitution saving throw or gain one level of exhaustion',
                    ],
                    ['Easy', 'DC 10', 'Tread water in rough conditions'],
                    [
                        'Hard',
                        'DC 20',
                        'Swim in stormy waters Formidable DC 30 Swim free of a vortex',
                    ],
                ],
            ],

            [
                'Improvised Tasks • Break an Object',
                [
                    ['Easy', 'DC 10', 'Force open a stuck wooden door'],
                    ['Moderate', 'DC 15', 'Force open a stuck heavy door'],
                    [
                        'Hard',
                        'DC 20',
                        'Break open a solid locked door; break rope bonds/manacles',
                    ],
                    [
                        'Very Hard',
                        'DC 25',
                        'Break open a solid barred door or elaborate lock',
                    ],
                    [
                        'Formidable',
                        'DC 30',
                        'Break open a heavy barred door with masterwork lock',
                    ],
                ],
            ],

            [
                'Improvised Tasks • Mighty Strength',
                [
                    [
                        'Moderate',
                        'DC 15',
                        'Push through an earthen tunnel that is too small',
                    ],
                    [
                        'Hard',
                        'DC 20',
                        'Hang on to a wagon while being dragged behind it',
                    ],
                    [
                        'Very Hard',
                        'DC 25',
                        'Tip over a large stone statue; keep a boulder from rolling',
                    ],
                    [
                        ,
                        'Contest (vs. STR)',
                        'Push a door open when someone else is holding it',
                    ],
                ],
            ],
        ],
    ],
]
