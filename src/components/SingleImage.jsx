// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
function SingleImage({ color, onClick }) {
  return (
    <div className="single-image-container" onClick={onClick}>
      <motion.div
        layoutId={color}
        className="single-image"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default SingleImage;
