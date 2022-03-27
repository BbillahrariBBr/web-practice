import React, { useState } from 'react';

const User = (props) => {
    const {name,email,picture,website,phone} = props.user;
    const [mobile, setMobile] = useState(' ');
    const addMember = props.addMember;
    const fullName = name.first + ' ' + name.last;
    const userStyle ={
        border: '2px solid red',
        margin: '10px',
        bordeRadious: '10px',
        padding: '10px',
        display: 'flex',
        width: '40%',
    }
    const showPhone = () => setMobile(phone);
    return (
        <div style={userStyle}>
            <div style={{marginTop:'25px'}}>
                <img src={picture.large} alt="" />
            </div>
            <div style={{marginLeft:'20px'}}>
                <h1 className='text-warning'>Name: {fullName}</h1>
                <p>email: {email}</p>
                <p><a href={website}>Learn About me</a></p>
                <p>Phone: {mobile}</p>
                <button onClick={showPhone}>Show phone number</button>
                <button onClick={() => addMember(fullName)}>Add me</button>

            </div>
            
        </div>
    );
};

export default User;