import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import ThemeToggle from './components/ThemeToggle';

const numColors = 4 * 4;
const makeColor = (hue) => `hsl(${hue}, 100%, 50%)`;
const colors = Array.from({ length: numColors }, (_, i) =>
  makeColor(Math.round((360 / numColors) * i))
);

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <ThemeToggle />
      <Gallery items={colors} onSelect={setSelectedIndex} />

      <AnimatePresence mode="wait">
        {selectedIndex !== null && (
          <Modal
            key="modal"
            color={colors[selectedIndex]}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
