import React from 'react'
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';

export const UserAvatar = () => {
    const user = useSelector((state) => state.auth.user);
  return (
    <Avatar name={user?.name} size="49" textSizeRatio={0.15} className="rounded-md fw-600" />
  )
}
