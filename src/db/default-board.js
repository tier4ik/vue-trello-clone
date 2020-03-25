export default {
    name: 'workshop',
    columns: [
        {
            name: 'todo',
            tasks: [
                {
                    description: '',
                    name: 'first task',
                    id: 1,
                    userAssigned: null
                },
                {
                    description: 'lorem ipsum',
                    name: 'second task',
                    id: 2,
                    userAssigned: null
                },
                {
                    description: '',
                    name: 'and third',
                    id: 3,
                    userAssigned: null
                }
            ]
        },
        {
            name: 'in-progress',
            tasks: [
                {
                    description: '',
                    name: 'first task',
                    id: 1,
                    userAssigned: null
                }
            ]
        },
        {
            name: 'done',
            tasks: [
                {
                    description: '',
                    name: 'first task',
                    id: 1,
                    userAssigned: null
                }
            ]
        }
    ]
}