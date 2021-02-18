import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

export const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
        console.log(timeAgo);
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo;