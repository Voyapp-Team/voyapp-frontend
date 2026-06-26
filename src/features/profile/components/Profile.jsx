"use client"

export default function Profile (){
    const socialMedia = [
        {link:"https://whatsapp", img:"/public/whatsaap-icon.svg"},
        {link:"https://x", img:"/public/x-icon.svg"},
        {link:"https://instagram", img:"/public/instagram-icon.svg"},
        {link:"https://tictok", img:"/public/tictok-icon.svg"}
    ];

    const otherLinks =["https://somaportfolio.framer.website/", "https:/voya.me/"];
    return(
        <section>
            <div>
                <p>Chanor James</p>
                <p>Product Designer</p>
                <p>I design intuitive interface to increase user retention by 45%  </p>
            </div>

            <div>
                {socialMedia && socialMedia.map((media, index) => (
                  <a href={media.link} key={index}>
                        <img src={media.img} alt="Social media icon"/>
                  </a>
                ))}
            </div>

            <div>
                {otherLinks && otherLinks.map((link, index) => (
                    <div key={index}>
                        <p>{link}</p>
                        <div>
                            <img src="/public/copyIcon.svg"/>
                        </div>
                    </div>
                ))}

            </div>

            <p>POWERED BY VOYA.COM</p>



        </section>
    )
}