import React from 'react'
import moment from 'moment'


const Article = ({title, snippet, length, date}) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("dddd, Do, yyyy")}</span>
        <span>{length} min read</span>
      </div>
        <p>{snippet}</p>
    </div>
  )
}

export default Article
