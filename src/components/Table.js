import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table.css'
export default function Table() {

    // const url = 
    // const token = localStorage.getItem('token');

    const [passportsList, setPassportsList] = useState([])
    // const [whiteList, setWhiteList] = useState([])
    // const [blackList, setBlackList] = useState([])
    const [filteredPassports, setFilteredPassports] = useState([])
    const [searchValue, setSearchValue] = useState('');
    let counter = 1;

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        await axios.get(
            'http://127.0.0.1:5000/api/admin/passports/',
            {
                headers: {
                    "access-token": localStorage.getItem('token')
                }
            }).then(data => {

                // let passports = 
                // console.log(passports)
                
                setPassportsList(data.data);
                // console.log(passportsList)
                

            })
    }


    const handleChange = event => {
        setSearchValue(event.target.value);
      };


    const handleAll = () => {
        fetchData()
    }

    const handleWhiteList = () => {
        const copyPassports = passportsList;
        setPassportsList(copyPassports.filter( passport => passport.Status === true ))
    }


    const handleBlackList = () => {
        // fetchData()
        const copyPassports = passportsList;
        setPassportsList(copyPassports.filter( passport => passport.Status === false ));
    }

    // const handleAscSort = () => {
    //     // const copyPassports = passportsList;
    //     // const result = sortJSON(copyPassports, 'Name', '123')
    //     // setPassportsList(result);
    // }


    // function sortJSON(arr, key, way) {
    //     return arr.sort((a, b) => {
    //         var x = a[key]; var y = b[key];
    //         if (way === '123') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
    //         if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
    //     });
    // }


    useEffect(()=>{
        const copyPassports = [...passportsList];
        const result = copyPassports.filter(passport =>
            passport.Name.toLowerCase().includes(searchValue.toLowerCase()) ||  passport.Sex.toLowerCase().includes(searchValue.toLowerCase()) || passport.Nationality.toLowerCase().includes(searchValue.toLowerCase()) ||  passport.Number.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredPassports(result);
    },[passportsList, searchValue])

    return (
        <div className='mx-auto my-3 container'>
            <h2 className=' text-center'>Welcome in pd admin panel.</h2>
            <div className="input-group my-2">
                
            {/* <button className=" input-group-text" >
                    <i className="fas fa-sort-alpha-down text-primary "></i>
                </button>
                
                    
                
                <button className="input-group-text " >
                <i className="fas fa-sort-alpha-down-alt text-primary"></i>
                </button> */}

                <span className='input-group-text'>
                    <i className="fas fa-search text-primary"></i>
                </span>

                <input type="search" placeholder="Search for any passport name, gender or country" value={searchValue} onChange={handleChange} className="form-control" aria-label="" aria-describedby="basic-addon1" />
                
                
                
                <button className="btn btn-secondary " type="button" onClick={handleAll}>All</button>
            
            
                <button className="btn btn-primary" type="button" onClick={handleWhiteList}>White List</button>
            
            
                <button className="btn btn-danger" type="button" onClick={handleBlackList}>Black List</button>
                
                
                
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
                        <th scope="col">Valid</th>
                        <th scope="col">Problem</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchValue === '' ? (
                            passportsList.map(passport => (
                                <tr key={passport.id}>
                                    <th scope="row">{counter++}</th>
                                    <td>{passport.Name + ' ' + passport.Surname}</td>
                                    <td>{passport.Sex }</td> {/* === 'M' ? 'Male' : 'Female' */}
                                    <td>{passport.Nationality}</td>
                                    <td>{passport.DateOfBirth}</td>
                                    <td>{passport.ExpirationDate}</td>
                                    <td>{passport.Number}</td>
                                    <td>{passport.Status ? <i className="fas fa-check-circle text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}</td>
                                    <td>{passport.Status ? ' not found ' : JSON.stringify(passport.Problem)}</td>
                                </tr>
                            
                            ))) : (
                                filteredPassports.map(passport => (
                                    <tr key={passport.id}>
                                        <th scope="row">{counter++}</th>
                                        <td>{passport.Name + ' ' + passport.Surname}</td>
                                        <td>{passport.Sex }</td> {/* === 'M' ? 'Male' : 'Female' */}
                                        <td>{passport.Nationality}</td>
                                        <td>{passport.DateOfBirth}</td>
                                        <td>{passport.ExpirationDate}</td>
                                        <td>{passport.Number}</td>
                                        <td>{passport.Status ? <i className="fas fa-check-circle text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}</td>
                                    <td>{passport.Status ? ' not found ' : JSON.stringify(passport.Problem)}</td>
                                    </tr>
                                
                                ))
                            )    
                    }
                </tbody>
            </table>
        </div>
    )
}
