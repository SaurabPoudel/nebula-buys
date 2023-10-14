'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function SignUpPage() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = userInfo;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { username, email, password } = userInfo;
    const body = JSON.stringify({ username, email, password });
    console.log(userInfo);
    const res = fetch('/api/auth/users', {
      method: 'POST',
      body: body,
    }).then((res) => res.json());
    console.log(res);
  };
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='mt-3 text-2xl'>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={handleChange}
          className='w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400'
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={handleChange}
          className='w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400'
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={password}
          onChange={handleChange}
          className='w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400'
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}
