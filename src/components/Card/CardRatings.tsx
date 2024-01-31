import { CardRatingsElement, CardRatingsVotesElement, CardRatingsWrapper } from "./style";
import StarFill from "../../assets/svg/star-fill.svg"
import Star from "../../assets/svg/star.svg" 

type CardRatingsProps = {
    rating: number;
    votes: number;
}

const CardRatings = ({ rating = 0, votes = 0}: CardRatingsProps) => {
    return (
        <>
            {
                rating && votes ? (
                    <CardRatingsWrapper>
                        <img src={StarFill} alt="Star" />
                        <CardRatingsElement>
                            {rating}
                        </CardRatingsElement>
                        <CardRatingsVotesElement>
                            ({votes} votes)
                        </CardRatingsVotesElement>
                    </CardRatingsWrapper>
                )
                : (
                    <CardRatingsWrapper>
                        <img src={Star} alt="Star fill" />
                        <CardRatingsVotesElement>
                            No ratings
                        </CardRatingsVotesElement>
                    </CardRatingsWrapper>
                )
            }
        </>
    )
}

export default CardRatings