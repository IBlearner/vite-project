import { useEffect, useState } from "react";
import "./Stars.scss";

const Stars = ({ numStars }: { numStars: number }) => {
    const [stars, setStars] = useState<number>(5);
    const maxStars: number = 5;

    useEffect(() => {
        if (numStars > maxStars) {
            setStars(5);
        } else if (numStars < 0) {
            setStars(0);
        } else {
            setStars(numStars);
        }
    }, [])

    const getStars = () => {
        const arr = [];
        for (let index = 0; index < maxStars; index++) {
            arr.push(<div className={"star " + (index <= stars ? "filled" : "empty")} key={`star-${index}`}></div>);
        }
        return arr
    }

    return (
        <div className="star-group">
            { getStars() }
        </div>
    )
}

export default Stars;