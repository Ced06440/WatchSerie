import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

function AggregateCredit ({ tvShowCredit }) {
    
    return (
        <div className={s.container}>
            <div className={s.name}>{tvShowCredit.name}</div>
            <img 
                src={SMALL_IMG_COVER_BASE_URL+tvShowCredit.profile_path} 
                alt={tvShowCredit.name} 
                className={s.img}
            />
            <div className={s.creditName}>{tvShowCredit.roles[0].character}</div>
        </div>
    )
}
export default AggregateCredit;
