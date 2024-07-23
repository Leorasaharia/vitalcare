import './LandingPage.css';

const LandingPage = () => {
    const proceedToDashboard = () => {
        window.location.href = '/default'; // Replace '/dashboard' with the actual route of your dashboard
    };

    return (
        <div className="landing-container">
            <div className="content">
                <h1>Welcome to HealthBot</h1>
                <p>Your ultimate companion for health tracking and insights. Let's get started on a journey to better health.</p>
                <button onClick={proceedToDashboard}>Proceed to Dashboard</button>
            </div>
        </div>
    );
};

export default LandingPage;
