import "./styles.css";

const testimonials = [
  {
    author: "Hon Bradly",
    testimony:
      "I was completely new to crypto when I joined. Their platform is so user-friendly, and the educational resources are fantastic. I started with a small investment and have been steadily growing my portfolio. The customer support is also excellent. Highly recommend",
  },
  {
    author: "David",
    testimony:
      "I was nervous about getting started with crypto, but MDHC made it a breeze. Their step-by-step guides and demo account helped me build confidence. I’ve been making consistent profits and couldn't be happier with my decision to choose them.",
  },
  {
    author: "Ema",
    testimony:
      "MDHC has revolutionized my trading experience. Their in-depth market analysis and real-time data have been invaluable. I've increased my profits significantly since joining, and I appreciate the platform's stability and security.",
  },
  {
    author: "Dan",
    testimony:
      "I was looking for a secure and reliable platform to invest my crypto. MDHC exceeded my expectations. Their commitment to security is evident, and their customer support is always there to assist. I'm confident in my investment with them.",
  },
];

const Testimonials = () => {
  return (
    <div className="my-4">
      <div>
        {/* header */}
        <h3 className="text-center">Testimonials</h3>
        <p className="text-center">Hear our reviews</p>
        <div className="box">
          {testimonials.map((testimony) => (
            <div className="card" key={testimony.author}>
              <p>{testimony.testimony}</p>
              <div>
                <h6 className="name">{testimony.author}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
