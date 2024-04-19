import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';

export const Project = () => {
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
                !loading && <h1>Proyectos</h1>
            }
        </>
    )
}
