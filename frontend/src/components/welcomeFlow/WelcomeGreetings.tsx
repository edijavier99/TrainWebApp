import { WelcomeForm } from "../forms/WelcomeForm";

interface Props {
    setAutoProceed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WelcomeGreetings = ({ setAutoProceed }:Props) => {
    return (
        <div id="welcome" className="container-fluid">
            <h3>Welcome to Your First Step Towards Change</h3>
            <p>
                I am delighted that you have taken this decision. To ensure I can
                genuinely assist you, I offer a complimentary first session of 45
                minutes for us to get acquainted. This initial meeting is crucial
                for establishing clear communication and understanding your goals
                and objectives. It also provides an opportunity to discuss how I
                can best support you on your journey.
            </p>
            <p className='fw-bold my-2'>Agenda for Our First Meeting:</p>
            <ul style={{ listStyleType: 'circle' }}>
                <li><strong>Welcome and Introduction:</strong> We'll start with a warm welcome and a brief introduction to get to know you better.</li>
                <li><strong>Goal Discussion:</strong> We'll discuss your personal goals and what you hope to achieve.</li>
                <li><strong>Personalized Planning:</strong> Together, we'll create a plan tailored to your specific needs and preferences.</li>
            </ul>
            <p>I look forward to our first meeting to begin this journey towards a healthier and happier version of yourself!</p>
            <WelcomeForm setAutoProceed={setAutoProceed} />
        </div>
    );
};