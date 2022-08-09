import React, { useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';

export default function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [partcp, setPartcp] = useState('');

  const [getdata, setGetdata] = useState(['']);
  const details = [];
  console.log('getdata', getdata);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('data', fname, lname, partcp);
    // details.push({ fname: fname, lname: lname, participtn: partcp });
    setGetdata({ fname: fname, lname: lname, participtn: partcp });
  };

  return (
    <div>
      <div className="main_sec">
        <form className="frmd" onSubmit={(e) => handleSubmit(e)}>
          <div className="frmgrp">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) => setFname(e.target.value)}
              // {...register('fname', { required: true })}
            />
            {/* {errors.fname && <p>First name is required.</p>} */}
          </div>
          <div className="frmgrp">
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => setLname(e.target.value)}

              // {...register('lname', { required: true })}
            />
            {/* {errors.lname && <p>Last name is required.</p>} */}
          </div>
          <div className="frmgrp">
            <input
              type="text"
              placeholder="Participation"
              name="participtn"
              onChange={(e) => setPartcp(e.target.value)}

              // {...register('participtn', { required: true })}
            />
            {/* {errors.participtn && <p>Participation is required.</p>} */}
          </div>
          <div className="">
            <button type="submit" className="btn">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="table">
        <table>
          <thead>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Participation</th>
          </thead>
          <tbody>
            {getdata.map((d, i) => {
              <tr i={d.id}>
                <td>{d.id}</td>
                <td>{d.fname}</td>
                <td>{d.lname}</td>
                <td>{d.participtn}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
