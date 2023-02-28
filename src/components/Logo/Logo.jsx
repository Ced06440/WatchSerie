import s from "./style.module.css";

function Logo({image, title}) {

    return (
        <>
            <div className={s.container}>
                <img src={image} className={s.image} />

                <span className={s.title}>
                    <img src={title} />
                </span>
            </div>
        </>
    )
}

export default Logo;