import React, { useEffect, useState } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { motion } from "framer-motion";
import axios from "axios";
import { API_URL } from "../api/Api";

const GalleryScroll = () => {
    const [images, setImages] = useState([]);
    const getGalleryImages = async () => {
        try {
            const response = await axios.get(`${API_URL}/galleries`);
            setImages(response.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getGalleryImages()
    }, [])
    return (
        <>
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <ParallaxScroll images={images} />
                </motion.div>
            </AuroraBackground>
        </>
    )
}

export default GalleryScroll;


// const images = [
//     "https://www.dropbox.com/scl/fi/5o4ridxoynw47e54g8x28/gate.png?rlkey=rno35xrw90tjzm9uw0r90o54u&st=rag0lst9&raw=1",
//     "https://www.dropbox.com/scl/fi/s7nfcrzhvpz4tg87iknwm/garden1.png?rlkey=igpvpnkq5p03ejtn8bz168oe8&st=ar54sdz8&raw=1",
//     "https://www.dropbox.com/scl/fi/zf5xxxtd7z5ob7245j7s6/ticket.png?rlkey=tarcurdj7m0l0620gjvk69488&st=5trdkeqj&raw=1",
//     "https://www.dropbox.com/scl/fi/imfxwo25wgsb5fel5gd9v/garden2.png?rlkey=ubgureq79uuyez4y5sv3lvfjf&st=yi6dtbkl&raw=1",
//     "https://www.dropbox.com/scl/fi/so1yrbof1cmrcf8dx42aa/garden3.png?rlkey=1yevw9ihixzskpi64m3tlie22&st=shb7o69d&raw=1",
//     "https://www.dropbox.com/scl/fi/snjcqtnzee0ebwqxf60j3/garden4.png?rlkey=csljmb9ogyzegrp3pqehcmvlr&st=sf4ikdcd&raw=1",
//     "https://www.dropbox.com/scl/fi/nmi5e5fjr9sozxtxuxdzb/garden5.png?rlkey=c8bo6d1tb4elgooz7fiixilxu&st=745dichb&raw=1",
//     "https://www.dropbox.com/scl/fi/hj93rs5pxybj8woq0igc7/garden6.png?rlkey=h1k4fbf8makb5bk19krt69wz3&st=zs1pl4an&raw=1",
//     "https://www.dropbox.com/scl/fi/t90cymbwfblo270e1eexw/garden7.png?rlkey=qbugmx27n1gd8sdyc5qkvopu3&st=hvko9jtx&raw=1",
//     "https://www.dropbox.com/scl/fi/y2jqm18ivkmfcvkvgju4t/kid-s-playground1.png?rlkey=qudtn2j4f7uwgglevl7fr45c2&st=mqeacf00&raw=1",
//     "https://www.dropbox.com/scl/fi/w02qwsymx4ackqzcry1ou/kid-s-playground2.png?rlkey=5qorzf9f04sy8pftlbgxsyxym&st=2v692vd1&raw=1",
//     "https://www.dropbox.com/scl/fi/05p0qx1aspmlxs3iei5yo/river.png?rlkey=8b7kb1nin3anltbxamqaqsqa2&st=j1wgai03&raw=1",
//     "https://www.dropbox.com/scl/fi/bpo6g1s63d5ae6e7dl5p6/river2.png?rlkey=bq47al3yxtiwi3yh5vgkshx1l&st=0opqagdu&raw=1",
//     "https://www.dropbox.com/scl/fi/dw4z9iwevynv17ivpk6vf/riverboat.png?rlkey=stcbsy7fy1os4bty4gs7nqebg&st=dx8o3yw3&raw=1",
//     "https://www.dropbox.com/scl/fi/slxy9dv72e3n07fep7hg1/flower.png?rlkey=229u341wy0hnccin1opbf8gtx&st=uqilc6tt&raw=1",
//     "https://www.dropbox.com/scl/fi/3vc5jdjn1j36fxhi77cgp/event1.png?rlkey=zj7o4mah1hcy4q9dgd3ppp8nc&st=6ir1n2kh&raw=1",
//     "https://www.dropbox.com/scl/fi/kkn19e3k1rx216oovfb20/event2.png?rlkey=puqpr9x8lfnc6g901357xe1qp&st=df4bfk47&raw=1",
//     "https://www.dropbox.com/scl/fi/6196d4o6v3xhrp3attj13/event3.png?rlkey=w9lx2rmz6w7g11woen78n16u6&st=v7wv293g&raw=1",
//     "https://www.dropbox.com/scl/fi/12wr78hs5kx2z1u3aif80/event4.png?rlkey=77kk79cj8i0k1ledzxnhx0ge2&st=y9urxuee&raw=1",
//     "https://www.dropbox.com/scl/fi/ecg6byj1g8bng8m0y1fmp/event5.png?rlkey=7mzn0ivb05jfo7svg5c2nn23o&st=3scwgixx&raw=1",
//     "https://www.dropbox.com/scl/fi/f182nwwbjicsrdpaldc0t/event6.png?rlkey=8tlzc6etx8cgzkeuubd7u04ss&st=h472auin&raw=1",
//     "https://www.dropbox.com/scl/fi/k39cduawonko7ry8s2nqv/event7.png?rlkey=iroifn1hwtmpo4yxr7bivnyk0&st=5bf9j9q5&raw=1",
//     "https://www.dropbox.com/scl/fi/ma3fj5cit23djmzr0h3gt/event8.png?rlkey=t2ong0kx0lde1itnrn3g5hznf&st=vr57ef8n&raw=1",
//     "https://www.dropbox.com/scl/fi/o8gzsh6k2t9zh7gjubuqo/event9.png?rlkey=pey2r7fzka4c6hp8x80a92e7e&st=6xjkjuzn&raw=1",
//     "https://www.dropbox.com/scl/fi/50cwup6r6nnqkaa9qq66a/event10.png?rlkey=ax9ov1zcw31ggjcdyp3fovue9&st=g276ay7u&raw=1",
//     "https://www.dropbox.com/scl/fi/6tlr89l4sk7hhg7q9a78z/event11.png?rlkey=8n2cj1nn1zq03zjb3jchzryyx&st=x9hvwhu7&raw=1",
//     "https://www.dropbox.com/scl/fi/7nwscybt85kus0xtup9j2/event12.png?rlkey=r2o5cjv6zzdnx7niaukpv397e&st=ck5h4sir&raw=1",
//     "https://www.dropbox.com/scl/fi/2gzr8rggl6ka4h3uoypcd/event13.png?rlkey=5l69gn278yyava96bndrqn1o4&st=aezr6m5a&raw=1",
//     "https://www.dropbox.com/scl/fi/knfqx37i53l4lyqs3icbe/nightview.png?rlkey=y6frydpu1g42xnl4fgs045lkl&st=k7lzn4ls&raw=1",

// ];
