import React from 'react'
import './StatusBadge.css'

function StatusBadge(props) {
    const status = props.status;
    const statusClass = `status-${status}`;
    
    return (
        <div className={`badge ${statusClass}`}>
            {status}
        </div>
    )
}

export default  StatusBadge
