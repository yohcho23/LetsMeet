import React from 'react';

import CreateGroup from './createGroup'
import CurrentGroup from './currentGroups'
import PendingGroups from './pendingGroups';

const Content = () => {
    return (
        <div>
            <p>Pending Invites:</p>
            <PendingGroups/>
            <p>My Groups:</p>
            <CreateGroup/>
            <CurrentGroup/>
        </div>
    )
}

export default Content;