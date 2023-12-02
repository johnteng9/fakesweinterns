export default function Class({ className, classNumber, days, time}) {
    return (
        <div id="class">
            <h4>{classNumber}</h4>
            <h7>{className}</h7>
            <div>
                <h6 id="days">{days}</h6>
                <h6 id="times">{time}</h6>
            </div>
        </div>
    )
}