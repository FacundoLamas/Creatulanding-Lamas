const Button = ({ label, onClick,id }) => {
    return <button onClick={onClick} id={id}>{label}</button>;
};
export default Button