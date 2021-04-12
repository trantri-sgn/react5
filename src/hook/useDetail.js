import { useEffect, useState } from 'react';
import coureDetailApi from '../apis/coureApi';

export default function useDetail(slug) {
    const [state, setState] = useState({
        course: null,
        related: null,
    });
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const resultCoure = await coureDetailApi.getslug(slug);
                const resultRelated = await coureDetailApi.getRelated(slug)
                setState({
                    ...state,
                    course: resultCoure,
                    related: resultRelated
                })
            } catch (error) {
                console.log("Fail", error)
            }
            setLoading(false)
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    return {
        state,
        loading
    }
}
