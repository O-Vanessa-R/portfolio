import { Send } from "lucide-react";

const ContactPage = () => {
    return (
        <main className="main">
            <h1 className="h1">Contactez-moi</h1>
            <p className="p text-center mb-6">
                Je suis toujours ouverte à de nouvelles opportunités et collaborations.
                <br />Vous pouvez me joindre via le formulaire ci-dessous.
                <br />
            </p>
            <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto">
                <h2 className="h2">Formulaire de contact</h2>
                <form action="https://formsubmit.co/rolland.vanessa@gmail.com" method="POST" className="space-y-4 w-full">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="inputForm"
                        placeholder="Nom*"
                        required
                    />

                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="inputForm"
                        placeholder="Email*"
                        required
                    />

                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="inputForm"
                        placeholder="Message*"
                        required
                    ></textarea>

                    <div className="w-full flex justify-center">
                        <button type="submit" className="sendButton">
                            <Send /> Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default ContactPage;