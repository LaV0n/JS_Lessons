import React from 'react'
import './lesson_4';
import {CreatePromiseHandler, RejectPromiseHandler, ResolvePromiseHandler} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={CreatePromiseHandler}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={ResolvePromiseHandler}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={RejectPromiseHandler}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;