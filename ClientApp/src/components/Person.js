import React, { Component } from 'react';

export class Person extends Component {
    static displayName = Person.name;
    render() {
        return (
            <div>
                <h1>Person View</h1>
            </div>
        );
    }
}