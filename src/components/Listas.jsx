import React, { useState, useCallback } from 'react';
import '../App';

const Listas = () => {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = useCallback(() => {
        if (novaTarefa.trim() !== '') {
            setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
            setNovaTarefa('');
        }
    }, [novaTarefa]);

    return (
        <section>
            <div className="app">
                <h1>Lista de Tarefas</h1>
                <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Adicionar nova tarefa"
                />
                <button onClick={adicionarTarefa}>Adicionar</button>
                <ul>
                    {tarefas.map((tarefa, index) => (
                        <li key={index}>{tarefa}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Listas;

