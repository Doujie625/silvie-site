import { contact_banner_data } from "./../Data/contact_banner_data"

const Contact_bar = function(props) {

    const banner = contact_banner_data.filter(image =>
        image.page === props.page
    )
    const bannerImage = banner.map(image =>
        <img 
        className='banner_image' 
        src={image.image}
        // style={bannerStyle}
        style={{objectFit: "cover", objectPosition: `100% ${image.position}`}}

        />
    )

    return (
        <div className='contact_bar'>
            {bannerImage[0]}
            <div className="contact_info">
                <font className="phone">(206) 779-0530</font>
                <a className="email" href="mailto:Silvie.Opatrna@gmail.com">Silvie.Opatrna@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact_bar