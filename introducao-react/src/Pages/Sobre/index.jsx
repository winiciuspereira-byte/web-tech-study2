import { useEffect, useState } from 'react'

export default function Sobre() {
    const [dados, setDados] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        const buscarDados = async () => {
            try {
                const resposta = await fetch('/sobre.json')

                if (!resposta.ok) {
                    throw new Error('Não foi possível carregar os dados da página.')
                }

                const dadosApi = await resposta.json()
                setDados(dadosApi)
            } catch (error) {
                setErro(error.message)
            } finally {
                setCarregando(false)
            }
        }

        buscarDados()
    }, [])

  return (
    <section className="container">
        {carregando && <p>Carregando informações...</p>}
        {erro && <p role="alert">{erro}</p>}
        {dados && !erro && (
            <>
                <h1>{dados.titulo}</h1>
                <p>{dados.conteudo}</p>
            </>
        )}
    </section>
  )
}
