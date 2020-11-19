import React from 'react';
import { useDispatch } from 'react-redux';

import { setCreateLinkModal } from '../../store/createModals';



export default function LinkIcon() {
  const dispatch = useDispatch()

  const handleShowModal = (e) => {
    e.preventDefault();
    dispatch(setCreateLinkModal(true));
  }



  return (
    <>
      <button className='dashNavButtons' onClick={handleShowModal}>
        <svg className='dashboardIcons' viewBox="0 0 17 17" width="40" height="35" fill="var(--green)"><path d="M9.9 5.1c-.2.3-.5 1.4-.6 2.6l1.1-.1c.7-.1 1.3-.3 1.5-.5.6-.6.6-1.4 0-2-.6-.5-1.4-.5-2 0zM8.5 0C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zm4.4 8.2c-.5.5-1.5.8-2.5.9l-1.2.2c-.1 1.3-.4 2.9-1 3.6-1.1 1.1-3 1.2-4.1 0-1.1-1.1-1.1-3 0-4.1.5-.5 1.5-.8 2.6-.9v1.5c-1.2.3-1.5.5-1.6.5-.6.6-.6 1.4 0 2 .5.5 1.4.5 2 0 .2-.2.5-1.1.6-2.5l.1-.9c0-1.3.2-3.6 1-4.4 1.1-1.1 3-1.2 4.1 0 1.2 1.1 1.2 2.9 0 4.1z"></path></svg>
      <p className='dashbIconFont'>Link</p></button>
    </>
  )
}
