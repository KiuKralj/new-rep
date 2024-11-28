import React from 'react'
import "./SinglePage.css";
import { useParams } from "react-router";


export const SinglePage = ({ data }) => {
  const { id } = useParams();

  const show = data.find((show) => {
    return show.id === id
  })

  return (
    <div className='single-page'>
      <h1>Cao</h1>
    </div>
  )
}
