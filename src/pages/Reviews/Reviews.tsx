import { useEffect, useState } from "react";
import "./Reviews.scss";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviewsData = async () => {
            let res = await fetch("http://localhost:3001");
            let data = await res.json()
            setReviews(data);
        }

        getReviewsData().catch((error) => {
            console.log(error)
        });

        (async() => {
            let res = await fetch("http://localhost:3002");
            // Handle errors
            console.log(await res.text());
            if (!res.ok) {
                throw new Error(`${res.status} rrrrerror: ${res.text()}`);
            }
            let data = await res.json();
            console.log(data)
            setReviews(data);
        })();
    }, [])

    return (
        <div>
            <h1>Reviews!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Email</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>Phone</h2>
            <p>0411111111</p>
        </div>
    )
}

export default Reviews;