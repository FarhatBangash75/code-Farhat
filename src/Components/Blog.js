import React, { useState } from 'react';
import './Feedback.css'; 

function Blog() {
  const [showDate, setShowDate] = useState(false);

  const handleSelectChange = (e) => {
    setShowDate(e.target.value === 'Option1'); 
  };

  return (
    <div className='first-dev'>
      <div className='firstdev-feedb'>
        <h1 className='feedbak-hiden'>Have Feedback To Share?</h1>
        <p className='text1'>Well, you ve' Come to the Right Place?</p>
        <p className='text2'>Fill in the sections below and we'll be in touch soon, or if you want to contact a</p>
        <p className='text3'>specific store, visit our locations page for store contact details. * indicates a</p>
        <p className='text4'>required answer</p>
      </div>

      <div className='sheetbox'>
        <h2 className='contact-hiden'>Contacts Details</h2>
        <input placeholder='FULL NAME *' className='Fullname' />
        <input placeholder='PhoneNumber *' className='Phonenumber' />
        <input placeholder='EmailNumber *' className='Email' />
        <input placeholder='Ordered Id *' className='orderid' />
        <input placeholder='Feedback Channel*' className='feedback' />
      </div>

      <div className='sheetbox1'>
        <h2 className='hider-2'>About Your Visit</h2>

        <select name="mySelect" id="mySelect" className='selecopt'>
          <option value="">SELECT STORE</option>
          <option value="Option 1">Hayatabad</option>
          <option value="Option 2">Saddar</option>
          <option value="Option 3">Board Bazer</option>
           <option value="Option 4">Univercity town</option>
        </select>

        <select
          name='myselect'
          id='myselect'
          className='select1'
          onChange={handleSelectChange}
        >
          <option value="">Date MM DD YYY</option>
          <option value="Option1">   <input type="date" id="mydate" name="mydate" className="date-picker" /></option>
          <option value="Option2"></option>
          <option value="Option3"></option>
          <option value="Option4"></option>
        </select>

        {showDate && (
          <input type="date" id="mydate" name="mydate" className="date-picker" />
        )}
  <select    name='myselect'id='myselect'className='select2' >
    <option value="">Feedback GATEGORY</option>
   <option type="option1">product qualitity</option>
        <option type="option2">Accurancy</option>
          <option type="option3">Late order</option>
            <option type="option4">Hospitlity</option>
    </select>

    <select className='select3'>
      <option value="" >Feedback TYPE</option>
           <option value="type2" >Comments</option>
                 <option value="type3" >Suggestion</option>
                       <option value="type4" >Questions</option>

    </select>
    <input placeholder="Enter your Message Here" className="message"></input>
      </div>
      <button className='Submit-btn'> Submit</button>
    </div>
  );
}

export default Blog;
