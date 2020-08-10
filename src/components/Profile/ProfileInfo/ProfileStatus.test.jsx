import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component',()=>{
    test('Profile status test!',()=>{
        const component = create(<ProfileStatus status='it-kamsutra.com'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamsutra.com' );
    })

    test('Profile status test2!',()=>{
        const component = create(<ProfileStatus status='it-kamsutra.com'/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    })

    test('Profile status test3!',()=>{
        const component = create(<ProfileStatus status='it-kamsutra.com'/>);
        const root = component.root;
        
        expect(() => {
            let span = root.findByType("input");
        }).toThrow();
    })
})