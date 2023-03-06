import './App.css';
import React, { useState } from 'react'
import Profile from './components/Profile'

function AppProfile() {
  const [isNew, setIsNew] = useState(false)
  const onclickNew = (event) => {
    // isNew === false ? setIsNew(true) : setIsNew(false)
    setIsNew((prevValue) => !prevValue)
  }
  return (
    <>
      <button onClick={onclickNew}>새로운 사람 등록하기</button>
      <Profile 
        image='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80'
        name='James'
        title='FE'
        isNew={isNew}
      />
      <Profile 
        image='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80'
        name='James'
        title='FE'
      />
    </>
  )
}

export default AppProfile;
