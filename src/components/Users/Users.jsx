import React from 'react';
import s from "./Users.module.css";
import AvaNull from "../../assets/images/ava_null.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCounter = 5 //Math.ceil (props.totalUsersCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCounter; i++) {
    pages.push (i)
  }
  return (
    <div className={s.users}>
      <div className={s.pagination}>
        {
          pages.map (p => {
            return (
              <div
                className={props.currentPage === p ? s.active : s.item}
                onClick={(e) => {
                  props.onPageChanged (p)
                }}
              >
                {p}
              </div>)
          })
        }
      </div>
      {
        props.users.map (u => <div key={u.id} className={s.user}>
          <div className={s.left}>
            <div className={s.pic}>
              <div className={s.ava}>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : AvaNull} alt=""/>
                </NavLink>
              </div>
              {u.followed
                ? <button onClick={() => {
                  props.unfollow (u.id)
                }} className={s.button}>Unfollow</button>
                : <button onClick={() => {
                  props.follow (u.id)
                }} className={s.button}>Follow</button>
              }
            </div>
            <div className={s.info}>
              <NavLink to={'/profile/' + u.id}>
                <div className={s.fullName}>{u.name}</div>
              </NavLink>
              <div className={s.status}>{u.status}</div>
            </div>
          </div>
          <div className={s.right}>
            <div>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Users