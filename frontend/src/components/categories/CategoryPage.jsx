import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CategoryPage = ({ index, categories, direction, itemsPerPage }) => {
  const variants = {
    enter: (dir) => ({
      x: dir === "left" ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir === "left" ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-auto">
      <motion.div
        className="flex w-full"
        key={index}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categories
            .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
            .map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="flex items-center bg-white p-1 sm:p-7 text-center rounded-lg shadow-md"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-12 sm:w-20 md:w-20 lg:w-40 h-10 lg:h-20 md:h-16 sm:h-12 object-cover mr-1 lg:mr-10 md:mr-3 sm:mr-0 max-sm:mr-0"
                />
                <div className="font-bold text-xs lg:text-xl md:text-lg sm:text-sm">
                  {cat.name}
                </div>
              </Link>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryPage;
