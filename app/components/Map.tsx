import React from "react";

const Map = () => {
    return (
        <div className="flex flex-col lg:flex-row items-start h-screen bg-gray-100">
            {/* Text Section */}
            <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center bg-gray-100">
                <span className=" text-center text-5xl font-bold text-gray-800 mb-6">
                   Το Τρέχον Έργο Μας
                </span>
                <p className="text-xl text-gray-600 mb-6">
                Με ιδιαίτερη χαρά σας παρουσιάζουμε το τελευταίο μας 
                έργο – ένα υπερσύγχρονο κτίριο που βρίσκεται απέναντι απο την πλατεία Τούμπας,
                 στην οδό Κινέτας 22. Το έργο αυτό αντικατοπτρίζει τη δέσμευσή μας για καινοτομία,
                  βιωσιμότητα και αρχιτεκτονική αριστεία.
                </p>
                <p className="text-lg text-gray-500">
                    Διεύθυνση: Κινέτας 22, Λάρισα 413 35
                </p>
            </div>

            {/* Map Section */}
            <div className="lg:w-1/2 w-full h-full">
                <div className="w-full h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1086.4292122305526!2d22.438626410745545!3d39.62977391253452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13588622bbcfeb61%3A0xead07771d802293a!2sKinetas%2022%2C%20Larisa%20413%2035!5e0!3m2!1sen!2sgr!4v1733068334511!5m2!1sen!2sgr"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
