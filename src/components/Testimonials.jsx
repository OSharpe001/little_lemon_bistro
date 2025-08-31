import { mock_profile_pic } from "../assets/images";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div>
                <p>(Rating)</p>
                <div className='profile'>
                    <img
                    className="profile-pic"
                    src={mock_profile_pic}
                    alt="mock profile-pic"
                    />
                    <p>(User Name)</p>
                </div>
                <p>(Review)</p>
            </div>
            <div>
                <p>(Rating)</p>
                <div className='profile'>
                    <img
                    className="profile-pic"
                    src={mock_profile_pic}
                    alt="mock profile-pic"
                    />
                    <p>(User Name)</p>
                </div>
                <p>(Review)</p>
            </div>
            <div>
                <p>(Rating)</p>
                <div className='profile'>
                    <img
                    className="profile-pic"
                    src={mock_profile_pic}
                    alt="mock profile-pic"
                    />
                    <p>(User Name)</p>
                </div>
                <p>(Review)</p>
            </div>
            <div>
                <p>(Rating)</p>
                <div className='profile'>
                    <img
                    className="profile-pic"
                    src={mock_profile_pic}
                    alt="mock profile-pic"
                    />
                    <p>(User Name)</p>
                </div>
                <p>(Review)</p>
            </div>
        </section>
    );
};