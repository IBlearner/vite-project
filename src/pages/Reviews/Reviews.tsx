import { useEffect, useState } from "react";
import "./Reviews.scss";
import Stars from "../../components/Stars/Stars";

interface IReview {
    message: string;
    name: string;
    stars: number;
}

const Reviews = () => {
    const [reviews, setReviews] = useState<IReview[]>([]);

    useEffect(() => {
        const getReviewsData = async () => {
            let res = await fetch("http://localhost:3001/reviews");
            let data = await res.json();

            // firebase returns an object of objects, so must convert to array
            var dataArr: IReview[] = [];
            for (const review in data) {
                if (Object.prototype.hasOwnProperty.call(data, review)) {
                    dataArr.push(data[review]);
                }
            }
            setReviews(dataArr);
        }

        getReviewsData()
        .catch((error) => {
            console.log(error)
        });
        

        // (async() => {
        //     let res = await fetch("http://localhost:3002");
        //     // Handle errors
        //     console.log(await res.text());
        //     if (!res.ok) {
        //         throw new Error(`${res.status} rrrrerror: ${res.text()}`);
        //     }
        //     let data = await res.json();
        //     console.log(data)
        //     setReviews(data);
        // })();
    }, [])

    const getReviewItems = () => {
        // if (reviews.length === 0) return;
        return reviews.map((review) => {
            return (
                <div>
                    <Stars numStars={review.stars}/>
                    <div>{review.message}</div>
                    <div>{review.name}</div>
                </div>
            )
        })
        // return reviews.length > 0 ? <div>{reviews.length}</div> : <div>bye</div>
    }

    return (
        <div>
            <h1>Reviews!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            {getReviewItems()}
        </div>
    )
}

export default Reviews;