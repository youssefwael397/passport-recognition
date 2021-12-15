import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table.css'
export default function Table() {

    const url = 'http://127.0.0.1:5000/api/admin/passports/'
    const token = localStorage.getItem('token');

    console.log(token)

    const [passportsList, setPassportsList] = useState([])
    const [filteredPassports, setFilteredPassports] = useState([])
    const [searchValue, setSearchValue] = useState('');
    let counter = 1;

    useEffect(() => {
        axios.get(
            url,
            {
                headers: {
                    "access-token": token
                }
            }
        )
            .then(data => {
                console.log(data.data)
                setPassportsList(data.data);

            }).then(error => {
                console.log('error....')
            })
    },[token])

    useEffect(()=>{
        const copyPassports = [...passportsList];
        const result = copyPassports.filter(passport =>
            passport.Name.toLowerCase().includes(searchValue.toLowerCase()) ||  passport.Sex.toLowerCase().includes(searchValue.toLowerCase()) || passport.Nationality.toLowerCase().includes(searchValue.toLowerCase()) ||  passport.Number.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredPassports(result);
    },[passportsList, searchValue])


    const handleChange = event => {
        setSearchValue(event.target.value);
      };

    return (
        <div className='mx-auto my-3 container'>
            <h2 className='my-font text-center'>Welcome in pd admin panel.</h2>
            <div className="input-group mb-1">
                <span className='input-group-text'>
                    <i class="fas fa-search text-primary"></i>
                </span>
                <input type="search" placeholder="Search for any passport name, gender or country" value={searchValue} onChange={handleChange} className="form-control" aria-label="" aria-describedby="basic-addon1" />
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
            <table className="table table-light table-hover"> {/* table-light table-hover */}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Expiration Date</th>
                        <th scope="col">Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchValue === '' ? (
                            passportsList.map(passport => (
                                <tr>
                                    <th scope="row">{counter++}</th>
                                    <td>{passport.Name + ' ' + passport.Surname}</td>
                                    <td>{passport.Sex }</td> {/* === 'M' ? 'Male' : 'Female' */}
                                    <td>{passport.Nationality}</td>
                                    <td>{passport.DateOfBirth}</td>
                                    <td>{passport.ExpirationDate}</td>
                                    <td>{passport.Number}</td>
                                </tr>
                            
                            ))) : (
                                filteredPassports.map(passport => (
                                    <tr>
                                        <th scope="row">{counter++}</th>
                                        <td>{passport.Name + ' ' + passport.Surname}</td>
                                        <td>{passport.Sex }</td> {/* === 'M' ? 'Male' : 'Female' */}
                                        <td>{passport.Nationality}</td>
                                        <td>{passport.DateOfBirth}</td>
                                        <td>{passport.ExpirationDate}</td>
                                        <td>{passport.Number}</td>
                                    </tr>
                                
                                ))
                            )    
                    }
                </tbody>
            </table>
        </div>
    )
}
