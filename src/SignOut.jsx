import { useEffect } from "react";


export default function SignOut(props) {
    const navigate = props.navigate;

    useEffect(() => {
        props.setLoggedIn({state:false, userName:""});
        setTimeout(navigate, 4000, "/");
    });

  return (

    <section className="sign-out">
        <h2>We'll be anticipating your return. .</h2>
    </section>
  );
};
