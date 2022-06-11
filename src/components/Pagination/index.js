import React from 'react';

const Pagination = ({itemPerPage, totalItem})=>{
    const pageNumber = [];
    for (let i=1; i<=Math.ceil(totalItem/itemPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <Pagination>
            <Pagination.Prev />
            {pageNumber.map(number=>(
                <Pagination.Item>{number}</Pagination.Item>
            ))}
            <Pagination.Next />
        </Pagination>
    )
}

export default Pagination;