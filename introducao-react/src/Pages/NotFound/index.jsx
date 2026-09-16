import React from 'react';
import "./notFound.css";
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="notfound-container">
            <h1 className="notfound-title">404 - Página não encontrada</h1>
            <p className="notfound-text">A página que você está procurando não existe.</p>
            <Link to="/" className="notfound-link">
                Voltar para o início
            </Link>
        </section>
    );
}
