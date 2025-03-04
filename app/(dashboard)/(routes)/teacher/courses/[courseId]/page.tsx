import React from 'react'

const CourseDetails = ({ params }: { params: { courseId: string }}) => {
  return (
    <div>Course id: {params.courseId}</div>
  )
}

export default CourseDetails; 