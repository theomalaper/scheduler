import React from 'react'
import InterviewerListItem from 'components/InterviewerListItem'
import "components/InterviewerList.scss"

export default function InterviewerList({interviewers, interviewer, setInterviewer}) {
  const interviewersList = interviewers.map(i => {
    return <InterviewerListItem
      id={i.id}
      name={i.name}
      avatar={i.avatar}
      selected={i.id === interviewer}
      setInterviewer={setInterviewer}
    />
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersList}</ul>
    </section>
  );
}