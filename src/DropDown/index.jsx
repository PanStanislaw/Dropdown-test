import React from 'react';
import './DropDown.scss';

const DropDown = React.memo(function DropDown({ items, title, multiSelect }) {
  const [open, setOpen] = React.useState('');
  const [select, setSelect] = React.useState([]);
  const [drop, setDrop] = React.useState('');
  const dropDownRef = React.useRef();
  const toggle = () => setOpen(!open);

  const handleClickClose = (e) => {
    if (!e.path.includes(dropDownRef.current)) {
      setOpen('');
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleClickClose);
  }, []);

  const onSelectCheck = (e) => {
    const name = e.target.name;
    setSelect([]);
    setSelect([name]);
  };

  const onChangeCheck = (e) => {
    const name = e.target.name;
    if (select.find((el) => el === name) !== name) {
      setSelect([...select, name]);
    } else {
      setSelect(select.filter((el) => el !== name));
    }
  };

  const onCloseSelectItem = (e) => {
    return setSelect(select.filter((el) => el !== e.target.name));
  };

  return (
    <div className="container">
      <div ref={dropDownRef} className={`wrapper ${title}`}>
        <div className="drop__header" onClick={toggle}>
          <div className="drop__header__title">
            <p className="drop__header__title--bold">{title}</p>
          </div>
          <div className="drop__header__action">
            <p>{open ? '-' : '+'}</p>
          </div>
        </div>
        {open && select.length > 0 && (
          <div className="drop__container">
            <ul>
              {select &&
                select.map((item) => (
                  <li key={`item-${item}`}>
                    <p>{item}</p>
                    <button onClick={onCloseSelectItem} className="close" name={item}>
                      x
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        )}
        <div className="drop__list">
          {open && (
            <ul>
              {items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <div className="checkbox">
                    <input
                      onChange={multiSelect ? onChangeCheck : onSelectCheck}
                      id={`input-${item.name}`}
                      data-li={`${item.name}`}
                      name={`${item.name}`}
                      type="checkbox"
                      checked={select.includes(item.name) ? true : false}
                    />
                    <label htmlFor={`input-${item.name}`}>
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                          stroke="#000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
});

export default DropDown;
