import "./Statistics.css";

function Statistics() {

    const stats = [

        {
            value: "12K+",
            title: "Registered Donors",
        },

        {
            value: "800+",
            title: "Hospitals",
        },

        {
            value: "35K+",
            title: "Successful Donations",
        },

        {
            value: "24/7",
            title: "Emergency Support",
        },

    ];

    return (

        <section className="statistics">

            {

                stats.map((item, index) => (

                    <div
                        key={index}
                        className="stat-card"
                    >

                        <h2>{item.value}</h2>

                        <p>{item.title}</p>

                    </div>

                ))

            }

        </section>

    );

}

export default Statistics;