import Button from 'react-bootstrap/Button';

function ButtonComponent({text, event}){
    return(
        <Button style={{width: "100px"}} variant="danger" onClick={()=>event()}>{text}</Button>
    )
}

export default ButtonComponent;