import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages:[
            { id: 1, value: "HTML,CSS,Bootstrap", xp: 1.8 },
            { id: 2, value: "React JS & Native", xp: 1.5 },
            { id: 3, value: "NodeJS", xp: 1.4 },
            { id: 4, value: "MongoDB,MySQL", xp: 1 }
        ]
    }
    render() {
        let {languages} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title = "languages"
                />
            </div>
        )
    }
}
