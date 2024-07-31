'use client';

import React from 'react'
interface Props{
    error: Error;
    reset: () => void;
 }
const error = ({ error,reset}: Props) => {
    console.log('Error',error)
  return (
    <>
          <div> The Unexpected error is occoured</div>
          <button className='btn' onClick={()=>reset()}>Retry</button>
    </>
  );
}

export default error