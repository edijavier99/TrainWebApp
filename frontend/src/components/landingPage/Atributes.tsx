const personalAttributes = [
    {
        title: "Certified Professional",
        description: "Certified by top institutions in the field.",
        icon: "🏅",
    },
    {
        title: "5+ Years of Experience",
        description: "Helping individuals achieve their fitness goals.",
        icon: "⏳",
    },
    {
        title: "People Helped",
        description: "Over 200+ lives transformed and counting.",
        icon: "👥",
    },
    {
        title: "Holistic Approach",
        description: "Focusing on mind, body, and nutrition.",
        icon: "🧘",
    },
];

export const Atributes = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
            {personalAttributes.map((attribute, index) => (
                <div
                    key={index}
                    className=" hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col rounded-lg items-center text-center"
                >
                    <div className="flex flex-col items-center">
                        <p className="text-6xl mb-4">{attribute.icon}</p>
                        <h6 className="text-xl font-bold mb-2">{attribute.title}</h6>
                        <p className="text-gray-500 text-sm">{attribute.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
