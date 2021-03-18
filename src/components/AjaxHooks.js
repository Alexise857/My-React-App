import React, {useState, useEffect} from 'react';

function Pokemon({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )

}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);
    // useEffect(() => {
    //
    //     let url = 'https://pokeapi.co/api/v2/pokemon';
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(response => {
    //
    //             response.results.forEach(element => {
    //                 fetch(element.url)
    //                     .then(res => res.json())
    //                     .then(json => {
    //
    //                         let pokemon = {
    //                             id: json.id,
    //                             name: json.name,
    //                             avatar: json.sprites.front_default
    //                         }
    //
    //                         // console.log({pokemon}
    //
    //                         setPokemons( (pokemons)=> [...pokemons, pokemon] );
    //
    //
    //                     })
    //             })
    //         })
    // }, []); // ejecutar una vez, arreglo vacio

    useEffect(() => {
        // si se necesitan asynconos, se cree adentro, no volver asyn el callbackn del useEffect

        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
            // console.log(res);
            json.results.forEach(async (element) => {
                let res = await fetch(element.url),
                    json = await res.json()
                console.log(json)
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }
                // console.log({pokemon}
                setPokemons((pokemons) => [...pokemons, pokemon]);
            })

        }

        getPokemons('https://pokeapi.co/api/v2/pokemon')

    }, []); // ejecutar una vez, arreglo vacio


    return (
        <>
            <h2>Peticiones Asincornas en Hooks</h2>
            {pokemons.length === 0 ? (
                <h3>Cargando ...</h3>
            ) : (
                pokemons.map(element => (
                    <Pokemon key={element.id} avatar={element.avatar} name={element.name}/>
                ))
            )}
        </>
    )
}

