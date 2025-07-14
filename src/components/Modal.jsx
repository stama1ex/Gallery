// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

function Modal({ color, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center overflow-auto"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        layoutId={color}
        style={{ backgroundColor: color }}
        className="rounded-xl shadow-xl w-full max-w-2xl mx-4 my-8 overflow-hidden will-change transform-gpu "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[500px] bar-thumb-blue-500 " />
        <div className="bg-white dark:bg-stone-800 p-6 max-h-64 overflow-y-auto scrollbar">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Информация о "фото"
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Цвет: {color}</p>
          <div className="mt-4 text-gray-600 dark:text-gray-400">
            Это просто цветной прямоугольник, но он ведёт себя как фото:
            открывается в модальном окне с анимацией, можно добавить описание,
            метаданные и прокрутку.
            <hr className="my-5 border-gray-300" />
            <h2 className="text-center text-2xl my-2 text-gray-700 dark:text-gray-100 font-medium ">
              Немного доп. текста
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis aspernatur reiciendis inventore eum vel quas nisi
              officia doloremque natus eaque, dolores, molestiae amet magnam
              similique. Similique dolor voluptates incidunt aut obcaecati
              perspiciatis quaerat, voluptatum minima tenetur, sint, nam quis
              in? Maxime exercitationem quisquam laborum iste nobis! Aut quia
              ratione fugiat odit magnam, harum similique esse rem blanditiis
              excepturi, quibusdam exercitationem laboriosam! Impedit voluptatum
              aperiam veniam ratione laborum voluptate vero aut vitae nesciunt
              possimus? Similique, corrupti. Voluptates, labore, quisquam nobis
              mollitia omnis, assumenda doloremque saepe nulla ab molestias ut.
              Officiis laudantium consequatur minima quaerat asperiores ducimus
              aspernatur, saepe accusantium nisi deleniti animi pariatur eaque
              totam reprehenderit culpa cupiditate amet fugit blanditiis. Quo
              hic labore rerum numquam corporis ipsum modi! Natus et, quasi,
              labore repudiandae assumenda, doloremque eaque eligendi sunt optio
              obcaecati ea temporibus minima enim quam officia voluptates? Illo
              quae voluptatibus ex culpa, iure tempora. Rerum assumenda quo
              facere rem ad, amet sint! Tenetur perspiciatis temporibus debitis
              expedita nisi rerum corporis laborum ducimus vitae inventore odio
              iure nihil impedit, consectetur ex? Atque nihil at eaque
              exercitationem eius, vitae sint recusandae. Voluptate deleniti
              illo quos laborum enim, aperiam hic exercitationem quibusdam
              necessitatibus unde nesciunt illum deserunt. Ullam exercitationem
              quidem itaque sunt fugiat quasi, consectetur qui tempore fugit et
              optio doloribus expedita? Hic quod magni ipsam? Neque autem
              temporibus modi architecto quae dolorum vel id odit pariatur
              soluta corrupti ducimus itaque, placeat quos earum iusto iste
              voluptas facilis atque debitis similique a minus est. Aut animi
              molestiae qui nobis optio accusantium, amet accusamus maxime sit
              tempore non. Exercitationem nemo minus necessitatibus sint animi!
              Sint dolorem enim nulla reprehenderit. Corrupti numquam maiores
              tempora laudantium reiciendis ipsum molestias similique doloribus
              odit non, quaerat perferendis ullam nulla quia totam quod, ratione
              facere libero dolor impedit quos placeat iure rem? Odit tempore
              sequi quia possimus voluptate dolores velit deserunt dolor
              quaerat. Veritatis tempore, consectetur eum enim repellendus,
              ullam asperiores vitae obcaecati laboriosam nulla quam ipsam ab
              recusandae temporibus. Eveniet officia a at unde incidunt pariatur
              quam rem numquam natus, voluptate facere neque, esse fugiat nobis
              blanditiis consectetur similique harum! Doloribus nam, corrupti
              delectus corporis impedit itaque tempora eos ex officiis
              consectetur iusto cupiditate nostrum eaque fugit accusantium
              tenetur assumenda beatae excepturi harum tempore a ratione totam!
              Quisquam sapiente incidunt facere ea fugit enim distinctio odio
              culpa reiciendis ipsam explicabo, mollitia ducimus dolores eaque
              illo nihil. Perferendis, accusamus, enim amet quod ut labore quos
              deleniti molestiae cumque nostrum aperiam nulla sunt mollitia?
              Facilis omnis et tempore quisquam obcaecati eaque ullam
              dignissimos provident tempora non corrupti molestias temporibus,
              ipsam, nemo, aperiam labore numquam! Expedita quam accusamus
              exercitationem obcaecati unde impedit debitis! Nisi, pariatur
              ratione quo quam iure commodi corporis necessitatibus aut
              voluptates dolorum ex, mollitia non, suscipit dolor? Consequuntur
              dolorem rem quasi voluptates aut error repellendus maiores
              deserunt iusto quae tempora voluptas exercitationem dolores
              officia tenetur excepturi velit recusandae dolor temporibus id
              est, veniam mollitia ex! Rerum laudantium sequi, consectetur ut
              vel, nesciunt repellendus exercitationem sapiente numquam
              accusantium iusto in explicabo voluptatibus non natus dolorem
              provident delectus voluptatum aperiam?
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
