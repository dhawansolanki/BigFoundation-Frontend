import "../utils/infiniteCarousel.css"

const StartUp = () => {
  return (
    <section className="infinite-scroll">
  <article>
    <div className="infinte-scroll-div">
      <ul className="infinite-scroll-ul">
        <li><div><img src="media/brand/brand1.png" alt="brand1" /></div></li>
        <li><div><img src="media/brand/brand2.png" alt="brand1" /></div></li>
        <li><div><img src="media/brand/brand3.png" alt="brand1" /></div></li>
        <li><div><img src="media/brand/brand4.png" alt="brand1" /></div></li>
        <li><div><img src="media/brand/brand5.png" alt="brand1" /></div></li>
        <li><div><img src="/startup-logos/bigbuddy.png" alt="brand1" /></div></li>
        <li><div><img src="/startup-logos/legalniti.png" alt="leganiti" /></div></li>
      </ul>
    </div>
  </article>
</section>
  );
};

export default StartUp;
