import s from "./style.module.css";
import AggregateCredit from "../AggregateCredit/AggregateCredit";

function AggregateCreditList ({ tvShowCreditList }) {

    return(
        <>
            <h4 className={s.title}>Acteurs principaux</h4>
            <div className={s.container}>
                {tvShowCreditList.map((tvShowCredit) => {
                    return (
                        <span key={tvShowCredit.id} className={s.aggregate_credit_list_item}>
                            <AggregateCredit
                                tvShowCredit={tvShowCredit}
                            />
                        </span>
                    );
                })}
            </div>
        </>
    )
}

export default AggregateCreditList;