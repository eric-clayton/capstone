import '../../css/buttons/Button.css'
import { useNavigate } from 'react-router-dom';

function Button(props) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(props.link)
    }
    return (
        <button onClick={e =>handleClick()}>{props.children}</button>
    );
}
export default Button