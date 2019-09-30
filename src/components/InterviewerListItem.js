import React from 'react'
import classNames from 'classnames'
import "components/InterviewerListItem.scss"

export default function InterviewerListItem({ name, avatar, selected, setInterviewer }) {
  let interviewersClass = classNames("interviewers__item", {
    " interviewers__item--selected": selected
  })

  return (
    <li className={interviewersClass} onClick={() => {setInterviewer(name)}}>
      <img 
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {name}
    </li>
  );
}