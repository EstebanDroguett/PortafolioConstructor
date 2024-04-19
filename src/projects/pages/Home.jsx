import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';

export const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {
                loading && <Loading setLoading={setLoading} />
            }
            {
                !loading && <h1>Inicio</h1>
            }
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde. aqui termina</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, tempore excepturi adipisci iure similique mollitia ducimus 
                tempora quis? Voluptas temporibus beatae cum maiores commodi sequi laborum nostrum officia unde. aqui termina</h1>
        </>
    )
}
