import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

function TVShowList({ tvShowList, onClickItem }){

    return(
        <>
            <div className={s.title}>Series qui pourrez-vous plaire :</div>
            <div className={s.list}>
                {tvShowList.map((tvShow) => {
                    return (
                        <span key={tvShow.id} className={s.tv_show_list_item}>
                            <TVShowListItem 
                                onClick={onClickItem}
                                tvShow={tvShow} />
                        </span>
                );
                })}
            </div>
        </>
    )
}
export default TVShowList;