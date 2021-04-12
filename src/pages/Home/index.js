import React, { useEffect, useState, useContext } from 'react'
import productApi from "../../apis/homeApi"
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Different from './components/Different'
import Testimonial from './components/Testimonial'
import Gallery from './components/Gallery'
import useAuth from '../../core/useAuth'
import { Context } from '../../core/AppProvider'



export default function Home() {

    const [state, setState] = useState({
        gallery: [],
        offline: [],
        online: [],
        review: [],
        loading: true,
    })

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await productApi.getAll();
                setState({
                    ...res,
                    loading: false
                })
            } catch (error) {
                console.log(error)

            }
        };
        fetchProducts();
    }, []);

    if (state.loading) {
        return "Loading...."
    }

    return (
        <>
            <main className="homepage" id="main">
                {/* {state.loading ? "Loading ...." : <>
                    <Banner />
                    <CourseOffline />
                    <CourseOnline />
                    <Different />
                </>
                } */}
                <Banner />
                <CourseList online={state.online} offline={state.offline} />
                <Different />
                <Testimonial review={state.review} />
                <Gallery gallery={state.gallery} />
            </main>
        </>
    )
}
