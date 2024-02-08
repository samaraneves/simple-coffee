import { CardAlertElement, CardRatingsElement, CardRatingsInformation, CardRatingsVotesElement, CardRatingsWrapper } from "./style";
import StarFill from "../../assets/svg/star-fill.svg"
import Star from "../../assets/svg/star.svg" 

type CardRatingsProps = {
    rating: number;
    votes: number;
    available: boolean;
}

const CardRatings = ({ rating = 0, votes = 0, available = false}: CardRatingsProps) => {
    return (
        <>
            {
                <CardRatingsWrapper>
                    <CardRatingsInformation>
                    {rating && votes ?  
                            <img src={StarFill} alt="Star" /> 
                            : <img src={Star} alt="Star fill" />
                        }
                        {rating && votes ? 
                            <CardRatingsElement> 
                                {Number(rating).toFixed(2)} 
                            </CardRatingsElement> : ( 
                            <CardRatingsVotesElement>
                                No ratings
                            </CardRatingsVotesElement>
                        )}
                        {
                            !!votes && (
                                <CardRatingsVotesElement>
                                    ({votes} votes)
                                </CardRatingsVotesElement>
                            )
                        }
                    </CardRatingsInformation>
                        {
                            !available && (
                                <CardRatingsWrapper>
                                    <CardAlertElement>
                                        Sold out
                                    </CardAlertElement>
                                </CardRatingsWrapper>
                            )
                        }
                </CardRatingsWrapper>
            }
        </>
    )
}

export default CardRatings