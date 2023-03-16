import { useEffect, useState } from "react";
import "./Reviews.scss";
import Stars from "src/components/Stars/Stars";

interface IReview {
    id: string;
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
            let dataArr: IReview[] = [];
            for (const review in data) {
                if (Object.prototype.hasOwnProperty.call(data, review)) {
                    // Must merge the review id with it's properties like so
                    dataArr.push({id: review, ...data[review]});
                }
            }
            setReviews(dataArr);
        }

        getReviewsData()
        .catch((error) => {
            console.log(error);
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

    // const reviewForm = () => {
    //     return (
    //         <form action="submit" onSubmit={submitForm}>
    //             <label htmlFor="name">Name:</label><br />
    //             <input type="text" id="name" name="name" value={formData.name} required placeholder="Please enter your first name" onChange={handleInputChange} /><br />
    //             <label htmlFor="email">Email:</label><br />
    //             <input type="email" id="email" name="email" value={formData.email} required placeholder="Please enter your email" onChange={handleInputChange} /><br />
    //             <label htmlFor="phone">Contact number:</label><br />
    //             <input type="tel" id="phone" name="phone" value={formData.phone} required placeholder="Please enter your contact number" onKeyDown={handleKeyPress} onChange={handleInputChange} minLength={10} maxLength={10}/>

    //             <p>Which would you like to enquire about?</p>
    //             <input type="radio" id="driving" name="enquiring" required value="driving" />
    //             <label htmlFor="driving">LAM driving school</label><br />
    //             <input type="radio" id="solar" name="enquiring" required value="solar" />
    //             <label htmlFor="solar">Diamond Solar</label><br />
    //             <input type="radio" id="thanksai" name="enquiring" required value="thanksai" />
    //             <label htmlFor="thanksai">ThanksAI</label><br />
    //             <input type="radio" id="other" name="enquiring" required value="other" />
    //             <label htmlFor="other">Other</label><br />

    //             <p>What would you like to ask?</p>
    //             <textarea name="message" id="message" cols={50} rows={10} required placeholder="Please enter up to 100 characters" value={formData.message} onChange={handleTextareaChange} /><br />

    //             <input type="submit" value="Submit" ></input>
    //         </form>
    //     )
    // }

    const getReviewItems = () => {
        return reviews.map((review) => {
            return (
                <div className="review-item" key={review.id}>
                    <div className="review-person">
                        <div>{review.name}</div>
                        <div><i>Student</i></div>
                    </div>
                    <div className="review-main">
                        <Stars numStars={review.stars}/>
                        <div className="review-date">DD/MM/YY</div>
                        <div>{review.message}</div>
                        {/* <button className="review-button">see more</button> */}
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Reviews!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="review-items">
                {getReviewItems()}
            </div>
        </div>
    )
}

export default Reviews;