// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

function Gallery({ items, onSelect }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[75vw] h-[900px] mx-auto p-4">
      {items.map((color, i) => (
        <motion.div
          key={color}
          onClick={() => onSelect(i)}
          layoutId={color}
          style={{
            backgroundColor: color,
            width: 'auto',
            height: 'auto',
            minHeight: '200px',
            minWidth: '150px',
          }}
          className="h-24 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 shadow-2xl"
        />
      ))}
    </div>
  );
}

export default Gallery;
