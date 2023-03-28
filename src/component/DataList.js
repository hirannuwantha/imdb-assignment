import React, { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import DataTable from 'react-data-table-component';
import StarRatings from 'react-star-ratings';

export default function DataList() {
        const [data, setData] = useState([]);
        useEffect(() => {
            console.log(data);
          fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(json => setData(json));
        }, []);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '234087a2cbmsh01036a0e3c7bfccp137d76jsnd77f5e4ef3a8'
        }
    };
    const lists = [];
 const columns=[
        {
            name:'',
            selector: (row)=><img width={50}height={50} src={row.thumbnail}/>,

            sortable: true
        },

        {
            name:'Rank&Title',
            selector: row=><div>{row.rank}. <a href="#">{row.title}</a> ({row.year})</div>,
            sortable: true
        },
        {
            name:"Rating",
            selector: (row)=><div><StarRatings starRatedColor="#edb707" numberOfStars={1} starDimension="30px"  rating={Number(row.rating)} />{row.rating}</div> ,
            sortable: true
        },
    ];


    const [list, setList] = useState(lists);
    return (

<div style={{display:'flex',marginTop:'10%',alignItems: 'center', justifyContent: 'center' }}>

        <div className='container mt-4'>
        <DataTable
            columns={columns}
            data={data}
            pagination
            fixedHeader
        />
    </div>
</div>
    )
}

