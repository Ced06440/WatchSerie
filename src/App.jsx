import { useEffect, useState } from "react";
import { tvShowAPI } from "./API/tv-show.js";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail.jsx";
import Logo from "./components/Logo/Logo.jsx";
import logo from "./assets/images/Logo.png";
import TitleLogo from "./assets/images/Title.png";
import TVShowListItem from "./components/TVShowListItem/TVShowListItem.jsx";
import TVShowList from "./components/TVShowList/TVShowList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";


function App(){

    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);


    async function fetchPopulars() {
        const populars = await tvShowAPI.fetchPopulars();

        if(populars.length > 0){
            setCurrentTVShow(populars[0]);
        }
    }

    async function fetchRecommendations(tvShowId) {
        const recommendations = await tvShowAPI.fetchRecommendations(tvShowId);

        if(recommendations.length > 0){
            setRecommendationList(recommendations.slice(0, 10));
        }
    }

    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow]);
    
    async function searchTvShow(tvShowName) {
        const searchResponse = await tvShowAPI.fetchByTitle(tvShowName);
        if(searchResponse.length > 0) {
            setCurrentTVShow(searchResponse[0]);
        }
    }

    return (
        <div className={s.main_container} 
            style={{
            background: currentTVShow
            ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
            : "black",
        }}>

            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo 
                            image={logo} 
                            title={TitleLogo} 
                        />
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar 
                            onSubmit={searchTvShow}
                        />
                    </div>
                </div>
            </div>

            <div className={s.tv_show_detail}>
            {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
            </div>

            <div className={s.recommendations_show}>
                { recommendationList && recommendationList.length > 0 && 
                (<TVShowList 
                    onClickItem={setCurrentTVShow} 
                    tvShowList={recommendationList} 
                /> 
                )}
            </div>
        </div>
    )
}

export default App;