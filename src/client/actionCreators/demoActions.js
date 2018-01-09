import Axios from 'axios';

export function downloadAndShowDemoMap(dateValue) {
    return async (dispatch, getState) => {
        dispatch({type: "LOADING"});

        const geoAPI = 'http://146.185.177.41/get/coordinates?timestamp=';
        const attrbAPI = 'http://146.185.177.41/get/attributes?code=';

        try {
            const [geo, attrs] = await Promise.all([
                Axios.get(geoAPI + dateValue),
                Axios.get(attrbAPI + dateValue)
            ]);
            dispatch({type: "SHOW_DEMO_MAP", geo, attrs});
        } catch (error) {
            dispatch({type: "FAILED", error});
            console.log("oops", error);
        }
        // TODO: implement country click

    };
}