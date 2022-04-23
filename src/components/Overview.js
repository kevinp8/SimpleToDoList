import React from 'react'


function Overview(props) {

    return (
        <ul>
            {props.list.map((task) => <li>{task}</li>)}
        </ul>
    )
}

export default Overview