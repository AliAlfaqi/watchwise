import React from 'react'

const User = ({ userData }) => {
  const { first_name, last_name } = userData
  return (
    <>
      <div>
        <p>User Name :{`${first_name} ${last_name}`} </p>
      </div>
    </>
  )
}

export default User