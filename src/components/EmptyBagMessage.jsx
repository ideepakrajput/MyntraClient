import { Link } from "react-router-dom";

function EmptyBagMessage() {
    return (
        <center className="empty-bag">
            <img src="images/empty-bag.webp" alt="Empty Bag" />
            <h2>Hey, It feels so light !</h2>
            <p>There is nothing in your bag. Lets add some itmes.</p>

            <Link to={"/"}> <button className="btn btn-danger">ADD SOME ITEMS</button> </Link>
        </center>
    )
}

export default EmptyBagMessage;