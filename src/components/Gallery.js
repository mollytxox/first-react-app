const GalleryTitle = () => {
    return (
        <h1 className="header">Gallery</h1>
    )
}

const GalleryImages = () => {
    return (
        <div className="image-container">
            <img className="gallery-image" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/4/18/2/shutterstock_many-flowers-bouquets-on-table-bazaar-1016544199.jpg.rend.hgtvcom.1280.640.suffix/1650306739287.jpeg" />
            <img className="gallery-image" src="https://www.thespruce.com/thmb/0tsus9Gee3h3-Esj7oamhQRyAHk=/4147x2699/filters:fill(auto,1)/best-flowers-for-late-spring-1402253-hero-e167f0685dc14981a77d8842993961e2.jpg" />
            <img className="gallery-image" src="https://www.stmellionflowers.co.uk/upload/mt/smf185/upload/files/images/funeral_panel.jpg" />
        </div>
    )
}

const GalleryContact = () => {
    return (
        <div>
            <p>CONTACT</p>
            <p>Name: Molly Thompson</p>
            <p>Location: YooBee Colleges Wellington</p>
        </div>
    )
}


const Gallery = () => {
    return (
        <div className="gallery-box">
            <GalleryTitle />
            <GalleryImages />
            <GalleryContact />
        </div>
    );
}

export default Gallery;
