import React, { useState } from 'react';
import './faq.css';

export default function Faq() {
    const [busca, setBusca] = useState('');
    const [aberto, setAberto] = useState(null);

    const dadosFaq = [
        { q: "O que é esta aplicação?", a: "É um sistema web interativo desenvolvido em React utilizando o ecossistema React Router para navegação dinâmica e SPA (Single Page Application)." },
        { q: "Como funciona a navegação?", a: "Usamos o React Router Dom. Ele intercepta os cliques nos links e renderiza o componente correto sem precisar recarregar a página inteira." },
        { q: "A aplicação é responsiva?", a: "Sim! Toda a interface foi planejada usando CSS Media Queries, adaptando-se perfeitamente de celulares a monitores desktop." },
        { q: "Onde os dados ficam salvos?", a: "Atualmente os dados do FAQ são estáticos estruturados em objetos JavaScript, permitindo pesquisas instantâneas no front-end." }
    ];

    const faqFiltrado = dadosFaq.filter(item => 
        item.q.toLowerCase().includes(busca.toLowerCase()) || 
        item.a.toLowerCase().includes(busca.toLowerCase())
    );

    const toggleFaq = (index) => {
        setAberto(aberto === index ? null : index);
    };

    return (
        <section className="faq-container">
            <h1 className="faq-title">Perguntas Frequentes</h1>
            <p className="faq-subtitle">Tem alguma dúvida? Explore ou pesquise o nosso conhecimento.</p>
            
            <input 
                type="text" 
                className="faq-search" 
                placeholder="Pesquise por uma dúvida..." 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />

            <div className="faq-list">
                {faqFiltrado.length > 0 ? (
                    faqFiltrado.map((item, index) => (
                        <div key={index} className={`faq-item ${aberto === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFaq(index)}>
                                {item.q}
                                <span className="faq-icon">{aberto === index ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="faq-no-results">Nenhuma dúvida encontrada para sua busca.</p>
                )}
            </div>
        </section>
    );
}