import { Link } from 'react-router-dom';
import './Error.css';

const Error = ({error, resetError}) => {
  console.log(error)
  return (
    <main>
      <Link to='/' onClick={() => resetError()}>Go home</Link>
      <p className="p-error">{error.message}</p>
    </main>
  )
}

export default Error;