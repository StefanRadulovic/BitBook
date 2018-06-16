import React from 'react'


const formatedDate = (date) => {
    let splited = date.split(' ');
    let nextSplited = splited[0].split('-');
    let newDate = `${nextSplited[2]}.${nextSplited[1]}.${nextSplited[0]}`;
    return newDate;


}

export default formatedDate;