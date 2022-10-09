// this type of data display is only available to access within this one component

const chocolateData = [
    {
        name: "Whittakers Hazella",
        price: 5,
        image: "https://wtk-live-public.s3.ap-southeast-2.amazonaws.com/public/Uploads/Products/Product/hazella-250g.png"
    },
    {
        name: "Marvellous Creations",
        price: 4,
        image: "https://a.fsimg.co.nz/product/retail/fan/image/master/5249665.png"
    },
    {
        name: "Lindt Chocolate Balls",
        price: 7,
        image: "https://a.fsimg.co.nz/product/retail/fan/image/400x400/5017526.png"
    }
]

const AllChocolate = () => {
    // map is reacts version of a forEach loop
    const renderedChocolate = chocolateData.map(
        // renderedChocolate is actually an array
        (item, index) => {
            return (
                <div key={index}>
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                    <img className="chocolate-image" src={item.image} />
                </div>
            )
        }
    )
    return renderedChocolate
}


const MapSomeData = () => {
    return (
        <div className="map-box">
            <h2>Map some data</h2>
            <br />
            <p>This component will render a list of chocolate
                from an array of objects.
            </p>
            <br />
            <div className="chocolate-div">
                <AllChocolate />
            </div>
        </div>
    );
}

export default MapSomeData;