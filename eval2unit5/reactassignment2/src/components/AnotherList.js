import { render } from '@testing-library/react';
import React from 'react';
class AnotherList extends React.Component {
    render() {
        return(
        <div>
           <h1>Mobile Manufacture</h1>
        <ul>
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
        </ul>
    </div>
        )
    }
    
}
export default AnotherList