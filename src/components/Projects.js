import React from 'react'

const Projects = (props)=>{
  console.log(props.value.match.params.id);
  return(
    <div>
      <h2>Id: {props.match.params.id}</h2>
    </div>
  )
}

export default Projects