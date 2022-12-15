import todoForm from './images/todoForm.png';
import datesAndRelevance from './images/datesAndRelevance.png';
import deleteAndCompleted from './images/deleteAndCompleted.png';
import buttonUI from './images/buttonUI.png';
import allTodos from './images/allTodos.png';
import singleTodo from './images/singleTodo.png';

const descriptions = [
    {
        description:
            'Введите текст, дату выполнения и степень важности задачи.',
        image: todoForm,
    },
    {
        description:
            'Задачи отсортированны по степени важности цветом и по дате выполнения вкладками.',
        image: datesAndRelevance,
    },
    {
        description: 'Задачу можно пометить выполненной и удалить.',
        image: deleteAndCompleted,
    },
    {
        description:
            'Полностью очистить список задач или удалить все выполненные.',
        image: buttonUI,
    },
    {
        description:
            'Перейдя на вкладку All todos можно увидеть весь список задач, включая просроченные по дате (подсвечены красным). Каждая задача-ссылка, по которой можно перейки к каждой конкретной.',
        image: allTodos,
    },
    {
        description:
            'Можно скорректировать текст, дату и степень важности задачи.',
        image: singleTodo,
    },
];

export default descriptions;
