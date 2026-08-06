import "./Testimonials.css";

const testimonials = [

    {

        name:"Dr. Sarah Williams",

        role:"City Hospital",

        review:

        "The AI donor recommendation system has significantly reduced emergency response time.",

    },

    {

        name:"Rahul Sharma",

        role:"Regular Donor",

        review:

        "The platform makes donating blood simple, transparent and rewarding.",

    },

    {

        name:"Blood Bank Manager",

        role:"Regional Blood Center",

        review:

        "Inventory prediction helps us prepare before shortages happen.",

    }

];

function Testimonials(){

return(

<section className="testimonials">

<h2>

Trusted By Healthcare Professionals

</h2>

<div className="testimonial-grid">

{

testimonials.map((item,index)=>(

<div
key={index}
className="testimonial-card">

<p>

"{item.review}"

</p>

<h3>

{item.name}

</h3>

<span>

{item.role}

</span>

</div>

))

}

</div>

</section>

)

}

export default Testimonials;