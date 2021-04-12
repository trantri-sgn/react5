import React, { useEffect, useRef } from 'react'
// import $ from 'jquery';
let $ = window.$
export default function Gallery({ gallery }) {
    let listRef = useRef()
    useEffect(() => {
        $(listRef.current).flickity({
            contain: true,
            wrapAround: false,
            freeScroll: true,
            cellAlign: 'left',
            lazyLoad: 3,
            imagesLoaded: true,
            prevNextButtons: false
        });
    }, [])

    const renderImg = (arr) => {
        return arr.map(e => <img data-flickity-lazyload={e} alt="" key={e} />)
    }



    return (
        <section className="section-gallery">
            <div className="textbox">
                <h2 className="main-title">Chúng ta là một team</h2>
            </div>
            <div className="list" ref={listRef}>
                {renderImg(gallery)}
            </div>
            <div className="controls">
                <div className="btn_ctr prev" />
                <span>Trượt qua</span>
                <div className="timeline">
                    <div className="process" />
                </div>
                <div className="btn_ctr next" />
            </div>

        </section>
    )
}
