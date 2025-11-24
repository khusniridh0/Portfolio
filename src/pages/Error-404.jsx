import { Link } from "react-router";

const Error404 = () => {

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-[var(--body)]">
            <img className="min-w-[600px] md:min-w-[900px] h-auto absolute top-0 md:-top-40" src="picture/error-404.png" alt="" loading="lazy" />
            <Link to="/" className="btn w-fit rounded-full border-gradient absolute md:top-[58%] ">
                <span>Back to Home</span>
            </Link>
        </div>
    );
}

export default Error404;