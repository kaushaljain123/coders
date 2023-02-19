import React from 'react'
import { Link } from 'react-router-dom'

const StudentButtons = () => {
    return (
        <div class="admin-buttons">
            <Link className="links" to='/add-students'><li>Add Students</li></Link>
        </div>
    )
}

export default StudentButtons