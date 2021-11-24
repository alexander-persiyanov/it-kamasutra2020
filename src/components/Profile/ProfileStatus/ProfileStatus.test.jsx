import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

//**FOR RUN TEST INSERT : npm run test */
describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="test status"></ProfileStatus>);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("test status");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="test status"></ProfileStatus>);
        const instance = component.root;
        
        let span = instance.findByType("span");
        
        expect(span).not.toBeNull ();
    });

    test("after creation input shouldn't displayed", () => {
        const component = create(<ProfileStatus status="test status"></ProfileStatus>);
        const instance = component.root;
        
        
        
        expect(()=>{
            let input = instance.findByType("input");
        }).toThrow()
    });

    test("after creation span should be contains correct status", () => {
        const component = create(<ProfileStatus status="test status"></ProfileStatus>);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span.children[0]).toBe("test status");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="test status"></ProfileStatus>);
        const instance = component.root;
        let span = instance.findByType("span");
        span.props.onDoubleClick();
        let input = instance.findByType("input");
       
        expect( input.props.value).toBe("test status");
    });

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="test status" updateStatus={mockCallBack}></ProfileStatus>);
        const instance = component.getInstance();
       instance.deactivateEditMode(); 
       
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});


