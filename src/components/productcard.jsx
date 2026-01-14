const carta = ({img,texto}) =>{
    return <div className="productcard" >
                <img src={img} alt=""/>
                <span style={{color:'black'}}>{texto}</span>
            </div>
}
export default carta