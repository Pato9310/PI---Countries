import React from 'react';
import { useSelector } from "react-redux";
import Activity from '../Activity/Activity';

const ActivityList = () => {
    const activities = useSelector( state => state.activities);
    return (
        <div>
            {
                activities?.map( activity => {
                    return (
                    <Activity
                        name={activity.name}
                        duration={activity.duration}
                        season={activity.season}
                        difficulty={activity.difficulty}
                    />
                    )
                })
            }
        </div>
    );
};

export default ActivityList;
