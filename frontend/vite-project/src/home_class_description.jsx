export default function Description({className, classNumber, days, time}) {
    return (
        <div id="description">
            <div>
                <h6 id="days">{days} @ {time} </h6>
            </div>
            <h1>{classNumber}</h1>
            <h3>{className}</h3>
        </div>
    )
}