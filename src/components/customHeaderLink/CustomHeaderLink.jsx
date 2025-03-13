import './CustomHeaderLink.css';

export default function CustomHeaderLink(props){
    return(
    <a className="custom-link" href={props.href}>{props.content}</a>
    );
}