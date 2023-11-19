export default function Description({className, classNumber,description, days, time}) {
    return (
        <div id="description">
            <h1>{classNumber}</h1>
            <h3>{className}</h3>
            <p>{description}</p>
            <div>
                <h6 id="days">{days} @ {time}</h6>
            </div>
        </div>
    )
}