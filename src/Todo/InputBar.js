import React from 'react';
import Button from '../components/Button';

export default function InputBar() {
  return (
    <div className="inputBar">
      <input type={'text'} placeholder={'New todo'} id={'input'} />
      <Button
        onClick={() => {
          console.log('asd');
        }}
      />
    </div>
  );
}
