import moment from 'moment/moment';
const today = moment().format('yyyy-MM-DD');
const week = moment().add(2, 'days').format('yyyy-MM-DD');
const month = moment().add(1, 'month').format('yyyy-MM-DD');
const agoDay = moment().add(-10, 'days').format('yyyy-MM-DD');

const todos = [
    {
        text: '1Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'urgent',
        date: agoDay,
        isComplited: false,
        id: '0',
    },
    {
        text: '1Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'urgent',
        date: today,
        isComplited: false,
        id: '1',
    },
    {
        text: '1Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'normal',
        date: today,
        isComplited: false,
        id: '2',
    },
    {
        text: '1Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'nonUrgent',
        date: today,
        isComplited: false,
        id: '3',
    },
    {
        text: '2Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'urgent',
        date: week,
        isComplited: false,
        id: '4',
    },
    {
        text: '2odo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'normal',
        date: week,
        isComplited: false,
        id: '5',
    },
    {
        text: '2Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'nonUrgent',
        date: week,
        isComplited: false,
        id: '6',
    },
    {
        text: '3Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'urgent',
        date: month,
        isComplited: false,
        id: '7',
    },
    {
        text: '3Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'normal',
        date: month,
        isComplited: false,
        id: '8',
    },
    {
        text: '3Todo todo  todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo',
        relevance: 'nonUrgent',
        date: month,
        isComplited: false,
        id: '9',
    },
];

export default todos;
