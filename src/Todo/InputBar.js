import React from 'react';

export default function InputBar() {
  return (
    <div className="inputBar">
      <input type={'text'} placeholder={'New todo'} id={'input'} />
      <button name="addButton" className="addButton">
        <img src="src/images/Plus.png" alt="add" />
      </button>
    </div>
  );
}
