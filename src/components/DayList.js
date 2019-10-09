import React from 'react'
import DayListItem from "./DayListItem"

export default function DayList(props) {
  //list of days rendering for the sidebar
  const days = props.days.map(day => {
    return <DayListItem 
      key = {day.id}
      id = {day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay} />
  })
  return (
    <ul>{days}</ul>
  );  
}