import react from 'react'


function Comment ( {profile, text, name}){
  return(
    <div>
      <div>{profile}</div>
      <div>{text}</div>
      <div>{name}</div>
    </div>
  )
}


export default Comment