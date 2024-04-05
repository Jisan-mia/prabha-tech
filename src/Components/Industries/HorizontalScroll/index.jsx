import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ClientsScrollItem from '../ClientsScrollItem';
import { allScrollableClients } from "../data";
import './HorizontalScroll.css';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="horizontal__scroll">
      <div className="horizontal__scroll-content">
        <motion.div style={{ x }} className="horizontal__scroll-item">
          {allScrollableClients.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({  item }) => {
  return (
    <div
      className="horizontal__scroll-card"
    >
      <div
        className="horizontal__scroll-card-img"
      >
        <ClientsScrollItem item={item} />
      </div>

    </div>
  );
};

export default HorizontalScrollCarousel;
