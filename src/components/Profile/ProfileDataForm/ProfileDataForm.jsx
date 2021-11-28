import React, { useState } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";

const MyTextInput = ({ label, ...props }) => {
  
    const [field, meta] = useField(props);
   
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
};
const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <>
        <label className="checkbox">
          <input {...field} {...props} type="checkbox" />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  const MyTextArea = ({label, ...props}) => {
    
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label><br/>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
  };

const ProfileDataForm = ({profile,handleSubmit})=>{
    
    // const [checked,setChecked] = useState(profile.lookingForAJob);

   
    
    const initialValues = {
        fullName: profile.fullName,
        // lookingForAJob:checked,
        lookingForAJob:profile.lookingForAJob?profile.lookingForAJob:"",
        lookingForAJobDescription:profile.lookingForAJobDescription?profile.lookingForAJobDescription:"",
        aboutMe:profile.aboutMe?profile.aboutMe:"",
        contacts:profile.contacts,
    }


// console.log(initialValues);

    return( 
        <div>
           
            <Formik
                initialValues={initialValues }
        
                validate={(values)=>{
                    const errors = {};
                    if (!values.fullName) {
                        errors.fullName = 'Required';
                    } 
                    return errors;
                }}
       
                onSubmit={(values, { setSubmitting, setFieldError,setStatus,setErrors }) => {
                    // if(!checked){
                    //     delete values.lookingForAJobDescription;
                    // }
                   handleSubmit(values,setStatus,setErrors);
                   setSubmitting(false);
                //    setFieldError("fullName", "errorMessage");
                }}
            > 
            {({status}) => (  
                <Form>
                <div style={{ color: 'red' }}>
                                {status ? status.msg :'' }
                            </div>
                    <div>
                    <MyTextInput
                        label="First Name"
                        name="fullName"
                        type="text"
                        placeholder="insert full name"
                        
                    />
                    </div>
                    <div>
                    <MyCheckbox name="lookingForAJob"  >
                        lookingForAJob
                    </MyCheckbox>
                    </div>
                    {/* {checked && (
                        <div>
                        <MyTextArea 
                             label="Skills"
                             name="lookingForAJobDescription"
                             rows="6"
                             placeholder="insert skills"
                        />
                        </div>
                    )} */}

                    <div>
                        <MyTextArea 
                             label="Skills"
                             name="lookingForAJobDescription"
                             rows="6"
                             placeholder="insert skills"
                        />
                        </div>
                    
                    <div>
                    <MyTextArea 
                         label="About Me"
                         name="aboutMe"
                         rows="6"
                         placeholder="insert by yourself"
                    />
                    </div> 

                    <div>
                        <div> <b>Contacts:</b></div>
                        {Object.keys(profile.contacts).map((key,index)=>(
                            <div key={index} ><MyTextInput
                                label={key}
                                name={"contacts."+key}
                                type="text"
                                placeholder="insert valid url"
                                
                            />
                            </div>
                        ))}
                    </div>
                    
                    <button type="submit">Submit</button>
                </Form>
                ) }
            </Formik>
        </div>

    
    );

}
export default ProfileDataForm;

