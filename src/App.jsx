import { BrowserRouter, Routes, Route } from 'react-router-dom';
//packages
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
//components
import ActualTodos from './components/ActualTodos';
import ArchiveTodos from './components/ArchiveTodos';
import NotFound from './components/NotFound';
import MainLayouts from './layouts/MainLayouts';
import initTodos from './Data/todos';
import SingleTodo from './components/SingleTodo';
import AboutApp from './components/AboutApp';

import './App.css';

function App() {
    const [todos, setTodos] = useState(initTodos);

    const addTodoHandler = (text, relevance, date) => {
        const newTodo = {
            text,
            relevance,
            date,
            isComplited: false,
            id: uuidv4(),
        };

        setTodos([...todos, newTodo]);
    };

    const changeTodoHandler = (newTodo) => {
        const updatedTodo = todos.map((item) => {
            if (item.id === newTodo.id) {
                return newTodo; // return new item
            }
            return item; // else return unmodified item
        });
        setTodos(updatedTodo);
    };
    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isComplited: !todo.isComplited }
                    : { ...todo };
            })
        );
    };

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteComplitedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isComplited));
    };

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MainLayouts />}>
                        <Route path="aboutApp" element={<AboutApp />} />
                        <Route
                            index
                            element={
                                <ActualTodos
                                    todos={todos}
                                    addTodo={addTodoHandler}
                                    deleteTodo={deleteTodoHandler}
                                    toggleTodo={toggleTodoHandler}
                                    resetTodos={resetTodosHandler}
                                    deleteComplitedTodos={
                                        deleteComplitedTodosHandler
                                    }
                                />
                            }
                        />
                        <Route path="aboutApp" element={<AboutApp />} />

                        <Route
                            path="archiveTodos"
                            element={
                                <ArchiveTodos
                                    todos={todos}
                                    deleteTodo={deleteTodoHandler}
                                    toggleTodo={toggleTodoHandler}
                                    resetTodos={resetTodosHandler}
                                    changeTodo={changeTodoHandler}
                                    deleteComplitedTodos={
                                        deleteComplitedTodosHandler
                                    }
                                />
                            }
                        />
                        <Route
                            path="archiveTodos/:id"
                            element={
                                <SingleTodo
                                    changeTodo={changeTodoHandler}
                                    todos={todos}
                                />
                            }
                        />
                        <Route path="todoApp" element={<AboutApp />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
