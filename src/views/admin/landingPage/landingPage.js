import './LandingPage.css';

const LandingPage = () => {
    const proceedToDashboard = () => {
        window.location.href = '/default'; // Replace '/dashboard' with the actual route of your dashboard
    };

    return (
        <div className="landing-container">
            <div className="content">
                <img src="/Healthbot.png" alt="HealthBot Logo" className="logo" />
                <h1>HealthBot</h1>
                <p>
                    HealthBot's US clinical services and appointments are no longer available. For details about your
                    health plan benefits and to find a new provider, contact your health plan.
                </p>
                <button onClick={proceedToDashboard}>Proceed to Dashboard</button>
                <p>
                    If you are looking for UK HealthBot Clinical Services <a href="/uk-services">click here</a>
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
