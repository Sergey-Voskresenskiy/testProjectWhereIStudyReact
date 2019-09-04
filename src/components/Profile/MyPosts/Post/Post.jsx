/* eslint-disable */
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.ava}></div>
      <p>{props.message}</p>
      <div className={s.like}>
        like: <span>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;