import React from 'react'

function MainStudentInfo(props) {
  return (
    <div className="student-card">
        <h2>Thông tin sinh viên</h2>
        <p>MSSV: {props.id}</p>
        <p>Họ tên: {props.name}</p>
        <p>MSSV: {props.class}</p>
    </div>
  )
}

export default MainStudentInfo;