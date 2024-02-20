import React from 'react'
import { Link } from 'react-router-dom';
import App from '../App';

function NotFound() {
  return (
    <div>
        <h1>Not Found:</h1>
        <Link to='/'> Back to Home</Link>
    </div>
  )
}
export default NotFound;