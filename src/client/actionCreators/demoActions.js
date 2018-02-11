import Axios from 'axios';

export function downloadAndShowDemoMap(dateValue) {
    return async (dispatch, getState) => {
        dispatch({type: "LOADING"});

        const geoAPI = '/api/shapes?date=';
        const statesAPI = '/api/states?date=';

        try {
            const [geo, states] = await Promise.all([
                Axios.get(geoAPI + dateValue),
                Axios.get(statesAPI + dateValue)
            ]);
            dispatch({type: "SHOW_DEMO_MAP", geo, states});
        } catch (error) {
            dispatch({type: "FAILED", error});
            console.log("oops", error);
        }
        // TODO: implement country click

    };
}
