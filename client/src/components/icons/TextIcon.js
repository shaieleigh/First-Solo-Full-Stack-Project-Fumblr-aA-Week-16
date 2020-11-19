import React from 'react';
// import { Redirect } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import { setUser } from '../../store/auth';
import { useDispatch } from 'react-redux';

// import CreateTextBlog from '../CreateModal';
import { setCreateTextModal } from '../../store/createModals';



export default function TextIcon() {
  const dispatch = useDispatch()


  const showModal = (e) => {
    e.preventDefault();
    dispatch(setCreateTextModal(true));
  }


  return (
    <>
      <button className='dashNavButtons' onClick={showModal}>
        <svg className='dashboardIcons' viewBox="0 0 20.8 13" width="40" height="35" fill="var(--black)"><path d="M.1 13h2.8l.9-3h4.7l.8 3h2.9L7.7 0h-3L.1 13zm6-10.1l2 5.1H4.2l1.9-5.1zM20 10V6c0-1.1-.2-1.9-1-2.3-.7-.5-1.7-.7-2.7-.7-1.6 0-2.7.4-3.4 1.2-.4.5-.6 1.2-.7 2h2.4c.1-.4.2-.6.4-.8.2-.3.6-.4 1.2-.4.5 0 .9.1 1.2.2.3.1.4.4.4.8 0 .3-.2.5-.5.7-.2.1-.5.2-1 .2l-.9.1c-1 .1-1.7.3-2.2.6-.9.5-1.4 1.3-1.4 2.5 0 .9.3 1.6.8 2 .6.5 1.3.9 2.2.9.7 0 1.2-.3 1.7-.6.4-.2.8-.6 1.2-.9 0 .2 0 .4.1.6 0 .2.1.8.2 1h2.7v-.8c-.1-.1-.3-.2-.4-.3.1-.3-.3-1.7-.3-2zm-2.2-1.1c0 .8-.3 1.4-.7 1.7-.4.3-1 .5-1.5.5-.3 0-.6-.1-.9-.3-.2-.2-.4-.5-.4-.9 0-.5.2-.8.6-1 .2-.1.6-.2 1.1-.3l.6-.1c.3-.1.5-.1.7-.2.2-.1.3-.1.5-.2v.8z"></path></svg>
      <p className='dashbIconFont'>Text</p></button>
    </>
  )
}
