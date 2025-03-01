import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  h1 {
    color: #001858;
    margin-bottom: 1rem;
  }
`;

const ToDoInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 250px;
  margin-bottom: 1rem;
  border: 2px solid #f582ae;
  border-radius: 10px;
`;

const ToDoButton = styled.button`
  padding: 10px 20px;
  background-color: #f582ae;
  color: #001858;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #8bd3dd;
    background-color: #001858;
    transform: scale(1.1);
  }
`;

const ToDoList = styled.ul`
  list-style-type: none;
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
`;

const ToDoItem = styled.li`
  background-color: #f3d2c1;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s ease;

  &.completed {
    text-decoration: line-through;
    background-color: #d4e7f1;
    opacity: 0.8;
  }

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    accent-color: #f582ae;
    cursor: pointer;
    margin-right: 10px;
  }
`;

const ActionButton = styled.button`
  color: #001858;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 5px;
`;

const EditButton = styled(ActionButton)`
  background-color: #8bd3dd;

  &:hover {
    background-color: #f582ae;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #f582ae;

  &:hover {
    background-color: #8bd3dd;
  }
`;

const SaveButton = styled(ActionButton)`
  background-color: #90ee90;

  &:hover {
    background-color: #32cd32;
  }
`;

const EditInput = styled.input`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #f582ae;
  border-radius: 5px;
  margin-right: 5px;
`;

const ToDoListPage = () => {
  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  //carregando task ja salvas
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  }, [tasks]);

  //manipulando tasks, crud bem simples
  const addTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTask('');
    }
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const saveEdit = () => {
    if (editedText.trim()) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === editingId ? { ...task, text: editedText.trim() } : task
        )
      );
      setEditingId(null);
      setEditedText('');
    }
  };

  //marcando task como conlcuida
  const toggleTaskCompletion = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ToDoListContainer>
      <h1>To-Do List</h1>
      <ToDoInput
        type="text"
        placeholder="Digite sua tarefa..."
        value={task}
        onChange={e => setTask(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && addTask()}
      />
      <ToDoButton onClick={addTask}>Adicionar Tarefa</ToDoButton>

      <ToDoList>
        {tasks.map(task => (
          <ToDoItem key={task.id} className={task.completed ? 'completed' : ''}>
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              {editingId === task.id ? (
                <>
                  <EditInput
                    type="text"
                    value={editedText}
                    onChange={e => setEditedText(e.target.value)}
                    onKeyUp={e => e.key === 'Enter' && saveEdit()}
                  />
                  <SaveButton onClick={saveEdit}>Salvar</SaveButton>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <span onClick={() => toggleTaskCompletion(task.id)}>
                    {task.text}
                  </span>
                </>
              )}
            </div>
            <div>
              <EditButton
                onClick={() => startEditing(task.id, task.text)}
                disabled={editingId !== null && editingId !== task.id}
              >
                Editar
              </EditButton>
              <DeleteButton onClick={() => deleteTask(task.id)}>
                Excluir
              </DeleteButton>
            </div>
          </ToDoItem>
        ))}
      </ToDoList>
    </ToDoListContainer>
  );
};

export default ToDoListPage;
