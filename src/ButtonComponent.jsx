import Button from 'react-bootstrap/Button';

function ButtonComponent({text, event, type}){
    return(
        <Button style={{width: "100px"}} variant="danger" onClick={()=>event()} type={type}>{text}</Button>
    )
}

export default ButtonComponent;