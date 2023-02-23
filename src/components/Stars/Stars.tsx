import { useState } from "react";
import "./Stars.scss";

const Stars = ({ numStars }: { numStars: number }) => {
    const [stars, setStars] = useState<number>()

    if (numStars > 5) {
        setStars(5);
    } else if (numStars < 0) {
        setStars(0);
    } else {
        setStars(numStars);
    }

    const getStars = () => {
        const arr = [];
        for (let index = 0; index < numStars; index++) {
            arr.push(<div>{index}</div>);
        }
        return arr
    }

    return (
        <div id="stars">
            { getStars() }
        </div>
    )
}

export default Stars;