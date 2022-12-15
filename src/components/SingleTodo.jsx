import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import moment from 'moment/moment';
import styles from './Single.module.css';
import Button from './UI/Button';

const SingleTodo = (props) => {
    const { id } = useParams();
    const { changeTodo, todos } = props;
    const todo = todos.find((el) => el.id === id);

    const [newTodo, setNewTodo] = useState(todo);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!todo) {
            navigate('..', { relative: 'path' });
        }
    }, [todo, navigate]);

    function handleInputChange(name, value) {
        setNewTodo({ ...newTodo, [name]: value });
    }

    return (
        <div className={styles.singleTodo}>
            <textarea
                value={newTodo.text}
                onChange={(e) => handleInputChange('text', e.target.value)}
                type="text"
            />
            <div>
                <input
                    type="date"
                    value={newTodo.date}
                    onChange={(e) =>
                        handleInputChange(
                            'date',
                            moment(e.target.value).format('yyyy-MM-DD')
                        )
                    }
                />
                <select
                    name="relevance"
                    value={newTodo.relevance}
                    onChange={(e) =>
                        handleInputChange('relevance', e.target.value)
                    }
                >
                    <option value="urgent">Срочная</option>
                    <option value="normal">Нормальная</option>
                    <option value="nonUrgent">Несрочная</option>
                </select>
            </div>

            <Button onClick={() => changeTodo(newTodo)}>Save</Button>
            <Link to=".." relative="path">
                All todos
            </Link>
        </div>
    );
};

export default SingleTodo;
