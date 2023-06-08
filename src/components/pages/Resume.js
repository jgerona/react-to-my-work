import React from 'react';
import myResume from '../../assets/Resume.pdf'
export default function Resume() {
  return (
    <h1 className='text-center'><a role='button' className='mt-5 btn btn-primary btn-lg text-center' href={myResume} target='_blank' rel='noreferrer'>Click Here For My Resume!</a> </h1>
  );
}
