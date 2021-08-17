import React from 'react';
import DropDown from './DropDown';

const data = [
  {
    title: 'Country',
    multiSelect: true,
    arr: [
      {
        id: 'a',
        name: 'English fdfsd',
      },
      {
        id: 'b',
        name: 'Русский fdsf',
      },
      {
        id: 3,
        name: 'Deutsche fsd f',
      },
      {
        id: 4,
        name: 'Italianof  fs',
      },
      {
        id: 5,
        name: '日本語f 2',
      },
    ],
  },
  {
    title: 'Names',
    multiSelect: false,
    arr: [
      {
        id: 1,
        name: 'Stive',
      },
      {
        id: 2,
        name: 'Sven',
      },
      {
        id: 3,
        name: 'Den',
      },
      {
        id: 4,
        name: 'Jon',
      },
      {
        id: 5,
        name: 'Finn',
      },
    ],
  },

  {
    title: 'TV',
    multiSelect: true,
    arr: [
      {
        id: 1,
        name: 'dsad',
      },
      {
        id: 2,
        name: '32323 dn',
      },
      {
        id: 3,
        name: 'd asd sd asda d',
      },
      {
        id: 4,
        name: 'Jdsadasd das',
      },
      {
        id: 5,
        name: 'da das d',
      },
    ],
  },
];

function App() {
  const [status, setStatus] = React.useState(null);

  const hendleClick = (el) => {
    console.log(el.title);
    setStatus(status === el.title ? null : el.title);
  };

  return (
    <div className="App">
      <ul>
        {data.map((el) => (
          <li key={el.title + el.id}>
            <DropDown
              items={el.arr}
              title={el.title}
              multiSelect={el.multiSelect}
              status={status === el.title}
              onTitleClick={() => hendleClick(el)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
