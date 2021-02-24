import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("Profile status component", () => {
    test("status from props should be in the state", ()=> {
        let component, instance;
            component = create(<ProfileStatus status="Hello" />);
        instance = component.getInstance();
            expect(instance.state.status).toBe("Hello");
        
        
    });

    test("after creation span should be displayed", ()=> {
        
        const component = create(<ProfileStatus status="Hello" />);
        const root = component.root;
        const span = root.findAllByType("span");
        expect(span.length).not.toBeNull();
        
        
    })

    test("after creation span should show corrent status", ()=> {
        
        const component = create(<ProfileStatus status="Hello" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("Hello");
    })

    test("after creation input should not be displayed", ()=> {
        
        const component = create(<ProfileStatus status="Hello" />);
        const root = component.root;
        expect(()=> {
            let input = root.findByType("input")
        }).toThrow();
    })
    // test("input should be shown instead of span", ()=> {
        
    //     const component = create(<ProfileStatus status="Hello" />);
    //     const root = component.root;
    //     const span = root.findByType("span");
    //     span.props.onDoubleClick();
    //     let input = root.findByType("input");
    //     expect(input.props.value).toBe("Hello");
    // })
    test("callback should be shown", ()=> {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Hello" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })

})