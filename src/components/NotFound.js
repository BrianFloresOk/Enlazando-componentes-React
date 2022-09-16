import { Link } from 'react-router-dom';
import React from 'react';

function NotFound() {
    return (
        <div>
            <h1 className="h3 mb-0 text-gray-800">Página no encontrada</h1>
            <Link to={"/"}>
                <button type="button" className="btn btn-success">Volver al home</button>
            </Link>
        </div>
    )
}

export default NotFound;