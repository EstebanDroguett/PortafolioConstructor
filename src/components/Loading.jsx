import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => {
    return (
        <>
        <div className="spinner-wrapper">
            <Spinner className="spinner-border" animation="border" variant="warning" />    
        </div>
        </>
    )
}
