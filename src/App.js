import React, { useEffect, useState } from 'react';

import { data } from './data';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setList(data);

    return () => {
      setList([]);
      setText('');
    };
  }, []);

  const handleSearch = search => {
    const {
      target: { value }
    } = search;
    setText(value);
    const name1 = value.trim().toLowerCase();
    const temp = data.filter(
      item =>
        item.name.trim().toLowerCase().includes(name1) ||
        item.description.trim().toLowerCase().includes(name1)
    );
    setList(temp);
  };

  return (
    <div className="App religion">
      <div className="inputSearch">
        <h1>Поиск электронных ресурсов по дисциплине "Религоведение"</h1>
        <input
          type="text"
          onChange={handleSearch}
          value={text}
          placeholder="Введите текст"
        />
      </div>
      <div className="list">
        {list.length > 0
          ? list.map((item, index) => (
              <div className="list__items" key={index}>
                <div className="list__col">
                  <div className="list__bg">
                    <div className="list__left">
                      <div className="list__item">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                    <div className="list__right">
                      <div className="list__item">
                        <strong>{item.name}</strong> <br />
                        <br />
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : 'Пусто. Не найдено.'}
      </div>
    </div>
  );
}

export default App;
