

function List(props) {


    return (
        <div className="flex justify-around mt-24">
            <div className="border border-black p-12">
                <h3>{props.children}</h3>
                <p>Regar la planta</p>
                <p>Limpiar zapas</p>

                <button className="font-bold" >+ Add</button>



            </div>
        </div>
    )
}

export default List;